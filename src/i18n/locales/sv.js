// This is just an example,
// so you can safely delete all default props below

export default {
    general: {
        failed: 'Åtgärden misslyckades',
        success: 'Åtgärden lyckades'
    },

    locale: {
        en: 'Engelska',
        sv: 'Svenska',
        hu: 'Ungerska'
    },

    userInput: {
        placeholder: {
            text: 'Ställ din fråga',
            image: 'Beskriv bilden du vill generera'
        },
        label: "Tryck på Skift (⇧) + Retur (↵) för en ny rad",
        tooltip: {
            send: 'Skicka din fråga',
            stop: 'Avbryt generering',
            generating: 'Genererar...',
            generateText: 'Generera text',
            generateImage: 'Generera bilder',
            speechStart: 'Starta diktering',
            speechStop: 'Stoppa',
        },
    },

    toolbar: {
        tooltip: {
            showDrawer: 'Visa meny',
            hideDrawer: 'Dölj meny',
            newConversation: 'Ny konversation',
            personas: 'Visa personas',
            addTeam: 'Lägg till ett nytt team',
            info: 'Info',
            settings: 'Visa inställningar',
            history: 'Visa konversationer',
            checkForUpdates: 'Kolla efter uppdateringar...'
        },
    },

    quickSettings: {
        copy: {
            tooltip: 'Kopiera'
        },
        share: {
            tooltip: 'Dela'
        },
        delete: {
            tooltip: 'Ta bort'
        },
        info: {
            tooltip:'Info',
            title: 'Konversationsinfo',
            usage: 'Token användning',
        },

    },

    settings: {
        title: 'Inställningar',
        avatar: {
            label: 'Avatar',
            caption: 'Välj din avatar',
            tooltip: 'Klicka för att välja din avatar'
        },

        general: {
            label: 'Allmänna',
            tooltip: 'Allmänna inställningar',

            darkMode: {
                label: 'Mörkt läge',
                caption: 'Växla mellan mörkt/auto/ljust läge',
                tooltip: 'Växla mellan mörkt/auto/ljust läge'
            },
            locale: {
                label: 'Applikationsspråk',
                caption: 'Välj språk för applikationstext',
                tooltip: 'Välj språk för applikationstext'
            },
            speech: {
                label: 'Talspråk',
                caption: 'Välj språk för tal-till-text och text-till-tal',
                tooltip: 'Välj språk för tal'
            },
            conversationMode: {
                label: 'Konversationsläge',
                caption: 'Skicka individuella meddelanden eller hela konversationshistoriken',
                tooltip: 'Växla konversationsläge på/av'
            },
            appMode: {
                label: 'Applikationsläge',
                caption: 'Använd applikationen i grundläge eller avancerat läge',
                tooltip: 'Växla mellan grundläge och avancerat läge för applikationen'
            },
            chatDirection: {
                label: 'Chattriktning',
                caption: 'Växla riktningen av chattmeddelandena upp/ner',
                tooltip: 'Växla riktningen av chattmeddelandena upp/ner'
            },
            quickSettings: {
                label: 'Snabbinställningar',
                caption: 'Visa snabbinställningar i chatfönstret',
                tooltip: 'Visa snabbinställningar'
            },
            streamResponse: {
                label: "Strömma svar",
                caption: "Strömma svaret från AI-assistenten",
                tooltip: "Strömma svaret från AI-assistenten istället för att vänta på att hela svaret ska genereras."
            },
        },

        provider: {
            label: 'API-leverantör',
            description: 'Välj den API-leverantör som ska användas för generering eller skapa en ny.',
            caption: 'Välj den API-leverantör som ska användas för generering',
            tooltip: 'Välj den API-leverantör som ska användas för generering',
        
            new: {
                buttonLabel: 'Lägg till',
                label: 'Lägg till ny API-leverantör',
                caption: 'Fyll i informationen nedan för den nya API-leverantören',
                tooltip: 'Skapa en ny API-leverantör'
            },
            edit: {
                buttonLabel: 'Redigera',
                label: 'Redigera den valda API-leverantören',
                caption: 'Uppdatera API-leverantörens information',
                tooltip: 'Redigera den valda API-leverantören'
            },
            delete: {
                buttonLabel: 'Radera',
                label: 'Radera API-leverantör',
                caption: 'Radera den valda API-leverantören',
                tooltip: 'Radera den valda API-leverantören'
            },
            name: {
                label: 'Namn',
                placeholder: 'API-leverantörens namn',
                tooltip: 'Välj den API-leverantör som ska användas för generering'
            },
            baseUrl: {
                label: 'Bas-URL för API',
                placeholder: 'API-leverantörens URL',
                tooltip: 'API-leverantörens URL'
            },
            apiType: {
                label: 'API-typ',
                caption: 'Endast OpenAI-liknande API:er stöds just nu',
                tooltip: 'Välj typen av API-leverantör'
            },
            apiKey: {
                label: 'API-nyckel',
                placeholder: 'Hemlig API-nyckel',
                tooltip: 'Din hemliga API-nyckel.'
            },
            ollama: {
                tooltip: 'Konfigurera & starta om Ollama'
            },
            model: {
                label: 'AI-modell',
                tooltip: 'Välj AI-modellen som ska användas'
            },
            manage: {
                buttonLabel: 'Hantera',
                tooltip: 'Hantera installerade modeller'
            },
            models: {
                buttonLabel: 'Modeller',
                tooltip: 'Hantera installerade modeller'
            }
        },
        

        api: {
            label: 'API Leverantör',
            tooltip: 'API Leverantör inställningar',

            provider: {
                label: 'API leverantör',
                caption: 'Välj den API-leverantör som ska användas för generering',
                tooltip: 'Välj den API-leverantör som ska användas för generering'
            },

            url: {
                label: 'Serveradress',
                placeholder: 'https://api.example.com:443',
                tooltip: 'Serverns adress'
            },

            apiKey: {
                label: 'AI API-nyckel',
                placeholder: 'Din AI API-nyckel',
                tooltip: 'Din AI API-nyckel. Du kan hitta den på din AI-dashboard.'
            }
        },

        text: {
            label: 'Textgenerering',
            tooltip: 'Inställningar för textgenerering',

            model: {
                label: 'AI-modell',
                tooltip: 'AI-modell som ska användas för att generera svaret.'
            },
            maxTokens: {
                label: 'Maximalt antal tokens',
                tooltip: 'Det maximala antalet tokens i svaret.'
            },
            temperature: {
                label: 'Temperatur',
                tooltip: 'Temperaturen är en mått på slumpmässigheten i texten. Lägre värden resulterar i mer förutsägbar text, medan högre värden resulterar i mer överraskande text.'
            },

            persona: {
                label: 'Personas',
                caption: 'Välj AI assistentens personas.',
                tooltip: 'Välj AI assistentens personas.'
            },
            teamWork: {
                label: 'Teamarbete',
                caption: 'Aktivera teamarbete',
                tooltip: 'Aktivera teamarbete. När det är aktiverat skickas din fråga till den första personan, svaret skickas till nästa, och så vidare. När det är inaktivt kommer varje persona att svara med ett individuellt svar på din fråga.'
            },
        },

        image: {
            label: 'Bildgenerering',
            tooltip: 'Inställningar för bildgenerering',

            choices: {
                label: 'Antal bilder',
                tooltip: 'Antal bilder att generera.'
            },
            size: {
                label: 'Bildstorlek',
                tooltip: 'Bildstorlek i pixlar.'
            },
            quality: {
                label: 'Bildkvalitet',
                tooltip: 'Bildkvalitet, standard eller HD'
            },
            style: {
                label: 'Bild stil',
                tooltip: 'Bildens stil.',
                vivid: 'Levande',
                natural: 'Naturlig'
            }
        },
        advanced: {
            label: 'Avancerat',
            tooltip: 'Avancerade inställningar',

            logging: {
                label: 'Applikationsloggning',
                caption: 'Konfigurera inställningar för applikationsloggning',
                enabled: {
                    label: 'Aktivera loggning',
                    caption: 'Skriv applikationsloggar till fil',
                    tooltip: 'Aktivera eller inaktivera applikationsloggning'
                },
                level: {
                    label: 'Loggnivå',
                    caption: 'Ställ in lägsta allvarlighetsnivå för loggning',
                    tooltip: 'Välj den lägsta loggnivån som ska registreras',
                    levels: {
                        trace: 'Spårning - Mycket detaljerad felsökning',
                        debug: 'Felsökning - Allmän felsökning',
                        info: 'Information - Normala operationer',
                        warn: 'Varning - Potentiella problem',
                        error: 'Fel - Allvarliga problem'
                    }
                },
                viewer: {
                    label: 'Visa loggar',
                    tooltip: 'Öppna loggvisaren',
                    title: 'Applikationsloggar',
                    copy: 'Kopiera loggar',
                    clear: 'Rensa loggar',
                    empty: 'Inga loggar tillgängliga'
                }
            }
        },

        cloud: {
            label: 'Molnsynkronisering',
            tooltip: 'Inställningar för molnsynkronisering',
            title: 'Molnsynkronisering',
            sync: {
                label: 'Aktivera molnsynkronisering',
                caption: 'Synkronisera dina inställningar mellan enheter',
                unavailable: 'Molnsynkronisering är endast tillgänglig på macOS-enheter',
                tooltip: 'Aktivera eller inaktivera molnsynkronisering'
            },
            provider: {
                label: 'Molnleverantör',
                caption: 'Välj din molnlagringstjänst',
                hint: 'Välj din molnlagringstjänst',
                unavailable: 'Molnleverantörer är endast tillgängliga på macOS',
                tooltip: 'Välj vilken molntjänst som ska användas för synkronisering'
            },
            lastSync: {
                label: 'Senaste synkronisering',
                caption: 'Senast synkroniserad: {date}'
            },
            enableDialog: {
                title: 'Molnsynkronisering inaktiverad',
                message: 'Molnsynkronisering är för närvarande inaktiverad. Vill du aktivera den i inställningarna?',
                ok: 'Öppna inställningar',
                cancel: 'Avbryt'
            },
            options: {
                label: 'Synkroniseringsalternativ',
                caption: 'Välj vad som ska synkroniseras mellan dina enheter',
                tooltip: 'Konfigurera vilka objekt som ska synkroniseras mellan dina enheter',
                personas: {
                    label: 'AI-personas',
                    caption: 'Håll dina personas synkroniserade',
                    tooltip: 'Aktivera för att synkronisera dina AI-personas mellan enheter'
                },
                conversations: {
                    label: 'Chatthistorik',
                    caption: 'Håll din chatthistorik synkroniserad',
                    tooltip: 'Aktivera för att synkronisera chatthistorik mellan enheter'
                },
                images: {
                    label: 'Genererade bilder',
                    caption: 'Håll dina AI-genererade bilder synkroniserade',
                    tooltip: 'Aktivera för att synkronisera AI-genererade bilder mellan enheter'
                }
            },
            syncNow: 'Synkronisera nu'
        }
    },

    page: {},

    messages: {
        tooltip: {
            copy: 'Kopiera',
            delete: 'Ta bort',
            share: 'Dela',
            info: 'Info',
            speak: 'Läs upp texten',
            stop: 'Sluta läsa upp texten'
        },
        info: {
            title: 'Meddelandeinfo',
            settings: 'Inställningar',
            systemMessages: 'Systemmeddelanden',
            timestamp: 'Tidsstämpel',
            usage: 'Token användning'
        }
    },

    info: {
        title: 'Applikationsbeskrivning',
        description: 'TeamAI-applikationen gör det möjligt för användaren att skapa ett team av AI-drivna botar med individuella förmågor och personligheter. Botarna kommer att lösa uppgiften som efterfrågas av användaren som en teaminsats, där varje bot bidrar med sina respektive förmågor.',
        features: {
            title: 'Funktioner',
            description: 'Applikationen gör det möjligt för användaren att skapa ett team av AI-drivna botar med individuella förmågor och personligheter. Botarna kommer att lösa den uppgift som användaren begär som ett team, där varje bot bidrar med sina respektive förmågor.',
            basic: {
                label: 'Grundläge',
                caption: 'I sitt grundläge fungerar applikationen som en chattapplikation, där användaren kan chatta med en enda AI-bot. Botten drivs av AI och kan konfigureras av användaren för att ha specifika förmågor och beteenden.'
            },
            advanced: {
                label: 'Avancerat läge',
                caption: 'I avancerat läge kan användaren skapa team av flera AI-bots, där varje bot har en specifik roll, kompetens, beteende och mål i teamet. Användaren kan tilldela en uppgift till teamet som kommer att lösas i samarbete mellan AI-botsen. Varje bot drivs av AI och kan konfigureras av användaren för att ha specifika förmågor och beteenden.'
            },
            settings: {
                label: 'Inställningar',
                caption: 'Användaren kan konfigurera applikationsalternativ som språk, mörkt eller ljust läge och konversationsläge. För närvarande tillgängliga språk är: Engelska, Svenska och Ungerska. Användaren kan också konfigurera AI relaterade parametrar, som API-nyckel, modell, max antal tecken, val och temperatur. AI-alternativen förklaras ytterligare i inställningsdialogen.'
            },
            history: {
                label: 'Konversationshistorik',
                caption: 'Konversationshistorik stöds både i grundläggande och avancerade lägen. Användaren kan visa konversationshistoriken och ta bort konversationer som inte längre behövs. Rubriker genereras för närvarande automatiskt, men kan i framtiden bli redigerbara om det finns efterfrågan från användarna. Konversationshistoriken lagras lokalt.'
            },
            personas: {
                label: 'Personas',
                caption: 'En persona är i grunden en AI-bot med en specifik konfiguration av förväntade kompetenser och beteenden. Användaren kan definiera och konfigurera valfritt antal personas. I grundläggande läge kan en persona väljas, och i avancerat läge kan användaren välja flera att inkludera i ett team.'
            },
            import: {
                label: 'Importera frågor',
                caption: 'Användaren kan importera frågor från Awesome ChatGPT-frågor. Denna GitHub-repositorium innehåller en samling exempel på frågor som andra användare har testat och fungerar med GPT-modeller och valt att öppna källkod. Användaren kan använda dessa frågor som inspiration för att konfigurera personas. Dessa frågor är på engelska men kan översättas till användarens önskade språk med hjälp av applikationen.'
            }
        },
        privacy: {
            title: 'Integritet',
            description: 'Alla inställningar som användaren gör och all information som anges lagras lokalt i applikationens interna databas. Applikationen använder inte cookies. Applikationen använder inte några spårningstjänster. Applikationen kan konfigureras att använda OpenAI API:er. Lär dig mer om OpenAI API här: https://platform.openai.com/docs/api-reference, och om dess datahanteringspolicy här: https://openai.com/policies/api-data-usage-policies. Applikationen erbjuder text-till-tal och tal-till-text funktionalitet genom Web Speech API. Lär dig mer om Web Speech API här: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API. Om standardwebbvisningen på värdoperativsystemet är Chome, kommer den att använda Chomes implementering av Web Speech API och kommer att använda Googles servrar för att utföra tal-till-text konvertering. Läs mer om detta i Googles förtydligande om sekretess: https://www.google.com/chrome/privacy/whitepaper.html#speech.'
        },
        license: {
            title: 'Licens',
            description: 'Applikationen är licensierad under MIT-licensen. Källkoden finns tillgänglig på GitHub: https://github.com/PeterBlenessy/TeamAI.'
        },
        contact: {
            title: 'Kontakt',
            description: 'Applikationen utvecklas av Péter Blénessy. GitHub-profil: https://github.com/PeterBlenessy.'
        }
    },

    history: {
        title: 'Konversationer',
        description: 'Konversationerna är grupperade efter ålder, med den senaste konversationen först. Dina konversationer sparas lokalt.',
        tooltip: {
            show: 'Visa konversation',
            copy: 'Kopiera konversationen till urklipp',
            delete: 'Ta bort',
            edit: 'Editera titeln',
            save: 'Spara',
            share: 'Dela',
        },
        groups: {
            'Today': 'Idag',
            'Yesterday': 'Igår',
            'ThisWeek': 'Denna vecka',
            'LastWeek': 'Förra veckan',
            'ThisMonth': 'Denna månad',
            'LastMonth': 'Förra månaden',
            'Older': 'Äldre',
            'January': 'Januari',
            'February': 'Februari',
            'March': 'Mars',
            'April': 'April',
            'May': 'Maj',
            'June': 'Juni',
            'July': 'Juli',
            'August': 'Augusti',
            'September': 'September',
            'October': 'Oktober',
            'November': 'November',
            'December': 'December',

            'Orphaned': 'Föräldralösa meddelanden'
        }
    },
    prompts: {
        generateTitle: 'Generera en titel för denna konversation. Håll den kort och koncis. Använd inte markup, emojis eller specialtecken. Använd bara vanlig text.'
    },
    personas: {
        title: 'Personas',
        description: 'Personas är AI-assistenter som konfigureras för att ha specifika förmågor och beteenden. Konfigurationen erhålls genom att använda speciellt utformade systemmeddelanden. Systemmeddelandena skickas till AI-assistenten före användarmeddelandet.',
        actions: {
            add: {
                tooltip: 'Lägg till'
            },
            create: {
                label: 'Skapa en ny persona',
                caption: 'Skapa en ny persona och ange de önskade förmågorna och beteendet.',
                tooltip: 'Skapa en ny persona'
            },
            import: {
                label: 'Importera personas',
                caption: 'Importera personas från Awesome ChatGPT prompts. Den här GitHub-repositoriet innehåller en samling exempel på meddelanden som kan användas med GPT-modeller. Dessa meddelanden är på engelska.',
                tooltip: 'Importera personas från Awesome ChatGPT prompts'
            },
            example: {
                caption: 'Importera exempel personas från TeamAI GitHub repot.',
                tooltip: 'Importera exempel personas från TeamAI GitHub repot.'
            },
            edit: {
                tooltip: 'Redigera'
            },
            delete: {
                tooltip: 'Ta bort'
            },
            save: {
                tooltip: 'Spara'
            },
            search: {
                placeholder: 'Sök...'
            }
        },
        tableHeading: {
            name: 'Namn',
            prompt: 'Systemmeddelande'
        }
    },
    apiErrors: {
        '400': {
            message: 'Anropet verkar ogiltig.',
            caption: 'Kontrollera ditt anrop och försök igen.'
        },
        '401': {
            message: 'Ogiltig autentisering.',
            caption: 'Se till att AI API-nyckeln som används är korrekt.'
        },
        '404': {
            message: 'Anropet verkar ogiltig.',
            caption: 'Kontrollera ditt anrop och försök igen.'
        },
        '429': {
            message: 'Begränsningen för antalet förfrågningar har nåtts, eller servern kan vara överbelastad.',
            caption: 'Försök igen om en stund.'
        },
        '500': {
            message: 'Servern hade ett fel när den behandlade ditt anrop.',
            caption: 'Försök igen om en stund och kontakta oss om problemet kvarstår.'
        },
        '503': {
            message: 'Servern är för närvarande otillgänglig.',
            caption: 'Försök igen om en stund.'
        },
        'Load': {
            message: 'Det gick inte att ladda resursen: Förfrågan tog för lång tid.',
            caption: 'Försök igen om en stund.'
        },
        undefined: {
            message: 'Ett okänt fel inträffade.',
            caption: 'Försök igen om en stund.'
        }
    },
    updater: {
        pending: {
            message: 'Kontrollerar efter uppdateringar...',
            caption: 'Detta kan ta några sekunder.'
        },
        error: {
            message: 'Ett fel inträffade när du kontrollerade efter uppdateringar.',
            caption: 'Försök igen om en stund.'
        },
        upToDate: {
            message: 'Ingen ny version tillgänglig.',
            caption: 'Du kör den senaste versionen.',
        },
        updateAvailable: {
            title: 'En ny version är tillgänglig',
            caption: 'Vill du ladda ner och installera den nya versionen?',
            actions: {
                install: 'Ladda ner och installera',
                later: 'Avfärda'
            }
        },
        relaunch: {
            message: 'Ny version installerad.',
            caption: 'Vill du starta om applikationen?',
            actions: {
                relaunch: 'Starta om',
                later: 'Avfärda'
            }
        },
        relaunchLater: {
            message: 'Uppdatering installerad',
            caption: 'Den nya versionen kommer att vara tillgänglig efter nästa omstart'
        },
        done: {
            message: 'Uppdatering är nerladdad.',
            caption: ''
        },
        releaseNotes: {
            message: 'Versionsanteckningar',
            caption: 'Ändringar i denna version:'
        },
        downloading: {
            title: 'Laddar ner uppdatering',
            caption: 'Vänligen vänta medan uppdateringen laddas ner...'
        },
    },
    databaseUpgrade: {
        needed: {
            message: 'Databasen måste uppgraderas.',
            caption: 'Detta kan ta några sekunder.'
        },
        inProgress: {
            message: 'Databasen uppgradering pågår',
            caption: 'Uppgraderar databas till version {version}...'
        },
        completed: {
            message: 'Databasen är uppgraderad.',
            caption: 'Allt klart. Databasens version är nu version {version}.',
            action: 'Avfärda'
        },
        error: {
            message: 'Fel vid databasuppgradering.',
            action: 'Avfärda'
        }
    },
    icloud: {
        sync: {
            checking: {
                message: 'Kontrollerar molnändringar...'
            },
            inProgress: {
                message: 'Synkroniserar med iCloud...'
            },
            noChanges: {
                message: 'Inga ändringar att synkronisera'
            },
            success: {
                message: 'Synkronisering slutförd'
            },
            error: {
                message: 'Synkronisering misslyckades',
                caption: 'Kunde inte synkronisera med iCloud'
            },
            conflict: {
                title: 'Synkroniseringskonflikt upptäckt',
                subtitle: 'Välj vilken version som ska behållas för varje konflikt',
                choose: 'Välj vilken version som ska behållas:',
                local: 'Lokal version',
                remote: 'Molnversion',
                useLocal: 'Använd lokal',
                useRemote: 'Använd moln',
                resolved: 'Konflikt löst'
            },
            status: {
                processing: 'Bearbetar synkroniseringsåtgärder...',
                offline: 'Arbetar offline',
                pendingChanges: 'Ändringar väntar på synkronisering',
                retrying: 'Försöker synkronisera igen...',
                error: 'Synkroniseringsfel inträffade'
            },
            personas: {
                uploading: {
                    message: 'Laddar upp personas...'
                },
                downloading: {
                    message: 'Laddar ner personas...'
                },
                uploaded: {
                    message: 'Personas synkade till molnet'
                },
                downloaded: {
                    message: 'Personas uppdaterade från molnet'
                },
                error: {
                    message: 'Kunde inte synkronisera personas'
                }
            },
            conversations: {
                uploading: {
                    message: 'Laddar upp konversationer...'
                },
                downloading: {
                    message: 'Laddar ner konversationer...'
                },
                uploaded: {
                    message: 'Konversationer synkade till molnet'
                },
                downloaded: {
                    message: 'Konversationer uppdaterade från molnet'
                },
                error: {
                    message: 'Kunde inte synkronisera konversationer'
                }
            },
            images: {
                uploading: {
                    message: 'Laddar upp bilder...'
                },
                downloading: {
                    message: 'Laddar ner bilder...'
                },
                uploaded: {
                    message: 'Bilder synkade till molnet'
                },
                downloaded: {
                    message: 'Bilder uppdaterade från molnet'
                },
                error: {
                    message: 'Kunde inte synkronisera bilder'
                }
            }
        }
    }
}
