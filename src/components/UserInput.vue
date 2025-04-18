<template>
    <q-toolbar>
        <q-input dense filled autofocus autogrow style="width: 100%;" :dark="$q.dark.isActive" stack-label
            :placeholder="isCreateImageSelected ? t('userInput.placeholder.image') : t('userInput.placeholder.text')"
            :label="isCreateImageSelected ? t('userInput.label') : t('userInput.label')"
            @keydown.enter.exact.prevent="handleUserInput" 
            @keydown.up="handleUpKey"
            @keydown.down="handleDownKey"
            v-model="question" type="textarea" 
            ref="userInputRef"
        >
            <template v-slot:prepend>
                <q-btn dense flat :icon="!isCreateImageSelected ? mdiTooltipText : mdiTooltipTextOutline"
                    :color="!isCreateImageSelected ? 'primary' : iconColor"
                    @click="isCreateImageSelected = !isCreateImageSelected">

                    <q-tooltip :delay="750" transition-show="scale" transition-hide="scale">
                        {{ t('userInput.tooltip.generateText') }}
                    </q-tooltip>
                </q-btn>

                <q-btn dense flat :icon="isCreateImageSelected ? mdiTooltipImage : mdiTooltipImageOutline"
                    :color="isCreateImageSelected ? 'primary' : iconColor"
                    @click="isCreateImageSelected = !isCreateImageSelected">

                    <q-tooltip :delay="750" transition-show="scale" transition-hide="scale">
                        {{ t('userInput.tooltip.generateImage') }}
                    </q-tooltip>
                </q-btn>

                <q-btn v-model="isMicrophoneActive" push dense flat
                    :icon="isMicrophoneActive ? mdiMicrophone : mdiMicrophoneOff"
                    :color="isMicrophoneActive ? 'primary' : iconColor"
                    @click.stop="isMicrophoneActive ? stopSpeechRecognition() : startSpeechRecognition()"
                    :loading="speechDetected">

                    <template v-slot:loading>
                        <q-spinner-bars color="primary" @click.stop="stopSpeechRecognition()" />
                    </template>

                    <q-tooltip :delay="750" transition-show="scale" transition-hide="scale">
                        {{ isMicrophoneActive ? t('userInput.tooltip.speechStop') : t('userInput.tooltip.speechStart') }}
                    </q-tooltip>
                </q-btn>

            </template>

            <template v-slot:append>
                <q-btn :loading="loading" @click="handleUserInput" dense flat :icon="mdiSend" :color="iconColor">
                    <q-tooltip :delay="750" transition-show="scale" transition-hide="scale">
                        {{ loading ? isCreateImageSelected ? t('userInput.tooltip.generating') : t('userInput.tooltip.stop') : t('userInput.tooltip.send') }}
                    </q-tooltip>
                    <template v-slot:loading>
                        <q-spinner color="primary" @click="handleUserInput" :style="!isCreateImageSelected ? 'cursor: pointer;' : ''"/>
                    </template>

                </q-btn>
            </template>

        </q-input>
    </q-toolbar>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { mdiTooltipText, mdiTooltipTextOutline, mdiTooltipImage, mdiTooltipImageOutline, mdiMicrophone, mdiMicrophoneOff, mdiSend } from '@quasar/extras/mdi-v7';
import logger from '@/services/logger';
import { useTeamsStore } from '@/stores/teams-store.js';
import { useSettingsStore } from "@/stores/settings-store.js";

const teamsStore = useTeamsStore();
const { loading, abortRequest, conversationId, userInput, isCreateImageSelected } = storeToRefs(teamsStore);
const settingsStore = useSettingsStore();
const { speechLanguage, streamResponse } = storeToRefs(settingsStore);
const question = ref('');
const { t } = useI18n();
const $q = useQuasar();
const userInputRef = ref(null);
const messageHistoryIndex = ref(-1);

function handleUserInput() {

    // Handle user aborts request
    if (loading.value && !isCreateImageSelected.value) { return abortRequest.value = true; }

    // Handle occasional bug where abortRequest is not reset
    if (!loading.value && abortRequest.value) { abortRequest.value = false; }

    // Trim user input of any whitespace characters
    question.value = question.value.replace(/^\s+|\s+$/g, '');

    if (question.value == '') { return; }

    userInput.value = question.value;
    question.value = '';
    stopSpeechRecognition();
    messageHistoryIndex.value = -1;
}

const isMicrophoneActive = ref(false);
const speechDetected = ref(false);
let recognition = null;

onMounted(() => setupSpeechRecognition());
watch(speechLanguage, () => setupSpeechRecognition());

const setupSpeechRecognition = () => {
    // Ask for permission to use the microphone
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            // Check if SpeechRecognition is supported
            if ('webkitSpeechRecognition' in window) {
                // Configure SpeechRecognition
                recognition = new webkitSpeechRecognition();
                recognition.continuous = false; // continue or stop when user stops speaking
                recognition.interimResults = true; // provide interim results or final only
                recognition.lang = speechLanguage.value;

                // Event handlers
                recognition.onaudiostart = () => logger.log(`[UserInput] - Audio capturing started`);
                recognition.onspeechstart = () => speechDetected.value = true;
                recognition.onspeechend = () => speechDetected.value = false;
                recognition.onresult = (event) => question.value = event.results[0][0].transcript;
                recognition.onerror = (event) => logger.error(`[UserInput] - Speech recognition error: ${JSON.stringify(event)}`);
                recognition.onaudioend = () => logger.log(`[UserInput] - Audio capturing ended`);
            } else {
                logger.warn('SpeechRecognition is not supported in this browser.');
                isMicrophoneActive.value = false;
            }

        })
        .catch(error => {
            logger.error(`[UserInput] - Microphone permission error: ${JSON.stringify(error)}`);
        });
}

const startSpeechRecognition = () => {
    isMicrophoneActive.value = true;
    try {
        recognition.start();
    } catch (error) {
        logger.error(`[UserInput] - Speech recognition error: ${JSON.stringify(error)}`);
    }
}

const stopSpeechRecognition = () => {
    isMicrophoneActive.value = false;
    speechDetected.value = false
    recognition.stop();
}

const getPreviousUserMessage = () => {
    messageHistoryIndex.value++;
    
    const message = teamsStore.getUserMessage(conversationId.value, messageHistoryIndex.value);
    
    if (message) {
        question.value = message.content;
    } else {
        // If no more messages, reset the index
        messageHistoryIndex.value--;
    }
}

const getNextUserMessage = () => {
    if (messageHistoryIndex.value >= 0) {
        messageHistoryIndex.value--;
        const message = teamsStore.getUserMessage(conversationId.value, messageHistoryIndex.value);
        
        if (message) {
            question.value = message.content;
        } else {
            messageHistoryIndex.value = -1;
            question.value = '';
        }
    }
}

const iconColor = computed(() => $q.dark.isActive ? 'grey-4' : 'grey-8');

const getCursorPosition = () => {
    const textarea = userInputRef.value.$el.getElementsByTagName('textarea')[0];
    if (!textarea) {
        logger.warn('[UserInput] - Textarea element not found');
        return null;
    }

    const text = textarea.value;
    const cursorPos = textarea.selectionStart;
    
    // Get current line by counting newlines before cursor
    const beforeCursor = text.substring(0, cursorPos);
    const afterCursor = text.substring(cursorPos);
    
    const currentLine = (beforeCursor.match(/\n/g) || []).length;
    const linesAfterCursor = (afterCursor.match(/\n/g) || []).length;
    const totalLines = currentLine + linesAfterCursor;

    const isFirstLine = currentLine === 0 && cursorPos === beforeCursor.length;
    const isLastLine = currentLine === totalLines && cursorPos === text.length;

    // logger.debug(`[UserInput] - Cursor: line ${currentLine}/${totalLines}, first=${isFirstLine}, last=${isLastLine}`);
    
    return {
        isFirstLine,
        isLastLine,
        cursorPos,
        textLength: text.length
    };
}

const handleUpKey = (event) => {
    const cursorInfo = getCursorPosition();
    if (!cursorInfo) return;
    
    // Navigate history only when cursor is at the start of first line
    if (cursorInfo.isFirstLine && cursorInfo.cursorPos === 0) {
        event.preventDefault(); // Only prevent default when navigating history
        getPreviousUserMessage();
    }
}

const handleDownKey = (event) => {
    const cursorInfo = getCursorPosition();
    if (!cursorInfo) return;
    
    // Navigate history only when cursor is at the end of last line
    if (cursorInfo.isLastLine && cursorInfo.cursorPos === cursorInfo.textLength) {
        event.preventDefault(); // Only prevent default when navigating history
        getNextUserMessage();
    }
}
</script>
