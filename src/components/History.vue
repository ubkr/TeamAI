<template>
    <q-card style="min-width: 60%; max-width: 70%">
        <q-card-section>
            <div class="text-h6">
                {{ t('history.title') }}
            </div>
            {{ t('history.description') }}
        </q-card-section>
        <q-separator />

        <q-card-section>
            <q-list>
                <div v-for="(group, groupName) in groupedHistory" :key="groupName">

                    <q-item-label label>{{ $t('history.groups.' + groupName) }}</q-item-label>

                    <q-item v-for="item in group" :key="item.conversationId" top dense clickable
                        @click="showConversation(item.conversationId)">

                        <q-item-section avatar>
                            <q-icon rounded size="xs" 
                            :name="item.conversationId == conversationId ? mdiChat : mdiChatOutline" 
                            :color="item.conversationId == conversationId ? 'primary' : iconColor" />
                        </q-item-section>

                        <q-item-section>
                            <q-input borderless standout dense style="width: 100%;"
                                :input-style="item.readonly ? { cursor: 'pointer' } : { cursor: 'text' }"
                                :readonly="item.readonly" focus="item.readonly" v-model="item.title"
                                @blur="updateConversation(item)">

                                <q-tooltip :delay="750" transition-show="scale" transition-hide="scale">
                                    {{ $t('history.tooltip.show') }}
                                </q-tooltip>

                                <template v-slot:append>
                                    <q-btn v-if="item.conversationId != ''" size="sm" flat dense
                                        :color="item.readonly ? iconColor : 'primary'"
                                        :icon="item.readonly ? mdiPencilOutline : mdiContentSaveOutline"
                                        @click="item.readonly = !item.readonly">

                                        <q-tooltip :delay="750" transition-show="scale" transition-hide="scale">
                                            {{ item.readonly ? $t('history.tooltip.edit') : $t('history.tooltip.save') }}
                                        </q-tooltip>
                                    </q-btn>

                                    <q-btn v-if="item.conversationId != ''" size="sm" flat dense :icon="mdiContentCopy" :color="iconColor"
                                        @click="copyConversation(item.conversationId)">
                                        <q-tooltip :delay="750" transition-show="scale" transition-hide="scale">
                                            {{ $t('history.tooltip.copy') }}
                                        </q-tooltip>
                                    </q-btn>

                                    <q-btn v-if="item.conversationId != '' " size="sm" flat dense
                                        :icon="mdiExportVariant" :color="iconColor"
                                        @click="shareConversation(item.conversationId)">
                                        <q-tooltip :delay="750" transition-show="scale" transition-hide="scale">
                                            {{ $t('history.tooltip.share') }}
                                        </q-tooltip>
                                    </q-btn>

                                    <q-btn size="sm" flat dense :icon="mdiDeleteOutline" :color="iconColor"
                                        @click="deleteConversation(item.conversationId)">
                                        <q-tooltip :delay="750" transition-show="scale" transition-hide="scale">
                                            {{ $t('history.tooltip.delete') }}
                                        </q-tooltip>
                                    </q-btn>

                                </template>

                            </q-input>
                        </q-item-section>

                    </q-item>

                </div>
            </q-list>
        </q-card-section>
    </q-card>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { mdiChat, mdiChatOutline, mdiPencilOutline, mdiContentSaveOutline, mdiContentCopy, mdiExportVariant, mdiDeleteOutline } from '@quasar/extras/mdi-v7';
import { useTeamsStore } from '@/stores/teams-store.js';
import { exportConversation } from '@/services/helpers.js';
import { useHelpers } from '@/composables/useHelpers';

const teamsStore = useTeamsStore();
const { history, conversationId } = storeToRefs(teamsStore);
const { t } = useI18n();
const { iconColor } = useHelpers();

function getDateGroup(timestamp) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const thisWeekStart = new Date(today);
    thisWeekStart.setDate(today.getDate() - ((today.getDay() + 6) % 7)); // Make Monday the first day of the week

    const lastWeekStart = new Date(thisWeekStart);
    lastWeekStart.setDate(thisWeekStart.getDate() - 7);

    const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    const thisYearStart = new Date(now.getFullYear(), 0, 1);

    // Check if the date timestamp is stored as a string
    if (isNaN(Date.parse(timestamp))) {
        timestamp = parseInt(timestamp);
    }

    const date = new Date(timestamp);  // convert the input to a date if it isn't already

    if (date >= today) {
        return 'Today';
    } else if (date >= yesterday) {
        return 'Yesterday';
    } else if (date >= thisWeekStart) {
        return 'ThisWeek';
    } else if (date >= lastWeekStart) {
        return 'LastWeek';
    } else if (date >= thisMonthStart) {
        return 'ThisMonth';
    } else if (date >= thisYearStart) {
        return date.toLocaleString('default', { month: 'long' });
    } else {
        return 'Older'; //date.getFullYear().toString();
    }
}

const groupedHistory = computed(() => {
    const grouped = {};
    // Sort by updated timestamp (most recent first) before grouping
    const sortedHistory = [...history.value].sort((a, b) => {
        // Use updated timestamp if available, fall back to timestamp
        const aTime = parseInt(a.updated || a.timestamp);
        const bTime = parseInt(b.updated || b.timestamp);
        return bTime - aTime;
    });
    
    sortedHistory.forEach(item => {
        // Use updated timestamp for grouping if available
        const date = getDateGroup(item.updated || item.timestamp);
        item.readonly = true;
        if (!grouped[date]) {
            grouped[date] = [];
        }
        grouped[date].push(item);
    });

    // Add potential orphaned messages
    if (teamsStore.getOrphanedMessages().length > 0) {
        if (!grouped['Orphaned']) grouped['Orphaned'] = [];
        // { conversationId, timestamp, created, updated, title }
        grouped['Orphaned'].push({ conversationId: '', title: 'Orphaned messages', readonly: true });
    }

    return grouped;
});

const showConversation = (id) => conversationId.value = id;
const copyConversation = (id) => navigator.clipboard.writeText(exportConversation(id));
const deleteConversation = (id) => teamsStore.deleteConversation(id);
const shareConversation = (id) => { try { navigator.share({ text: exportConversation(id) }) } catch (e) { } };

const updateConversation = (item) => {
    item.readonly = true;
    teamsStore.updateConversation(item.conversationId, { title: item.title });
};
</script>

<style></style>
