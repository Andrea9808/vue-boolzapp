const { createApp } = Vue;

createApp({

    data() {

        return {

            contacts: [
                {
                    name: 'Veronica L.',
                    avatar: 'img/persona1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Massimo A.',
                    avatar: 'img/persona2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Laura P.',
                    avatar: 'img/persona3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Giulio L.',
                    avatar: 'img/persona4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Lara U.',
                    avatar: 'img/persona5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Rosa H.',
                    avatar: 'img/persona6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Mauro W.',
                    avatar: 'img/persona7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },

            ],

            // inizzializzo una variabile (contattoAttivo) 
            contattoAttivo: 0,

            //inizializzo il nuovo messaggio per farlo partire vuoto
            nuovoMessaggio: "",

            //inizializzo variabile per setTimeout
            timerRisposta: 0,

            //ricerca nomi impostato con v-model sull'input di ricerca contatti
            ricercaNomi: "",

            //inizzializzo la chevron per farla comparire solo al passaggio del mouse
            mostraFreccia: false,

        }


    },

    //funzione per filtri di ricerca:

    //SPIEGAZIONE:
    //computed:la caratteristica delle proprietà computate è che vengono memorizzate nella cache e vengono ricalcolate solo se una delle dipendenze cambia.

    //creo la funzione filtro contatti e ritorno un filter. Dall'array di oggetti contacts filtro solo gli elementi che soddisfano una determinata condizione, dopo confronto il nome di ciascun contatto  (toLowerCase converte la stringa in minuscolo) che include "ricercaNomi" convertito sempre in minuscolo, confrontandolo con includes mi restituisce "true" se la stringa "ricercaNomi" è inclusa nel nome del contatto.
    computed: {
        filtroContatti() {
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(this.ricercaNomi.toLowerCase())
            );
        },
    },


    methods: {

        //seleziono il primo contatto della chat all'avvio dell'app
        selezionePrimoContatto() {
            if (this.contacts.length > 0) {
                this.contattoAttivo = this.contacts[0];
            }
        },


        //al click della card
        selezioneContattoAttivo(contatto) {
            this.contattoAttivo = contatto;

        },


        //scrivo messaggio
        aggiungiMessaggio() {

            //.trim rimuove gli spazi bianchi
            if (this.nuovoMessaggio.trim() !== '') {

                this.contattoAttivo.messages.push({
                    date: this.europaDate(new Date()),
                    message: this.nuovoMessaggio,
                    status: "sent",
                })

                this.nuovoMessaggio = '';
                this.risposta();
            }

        },

        //risposta automatica dopo 1s
        risposta() {

            this.timerRisposta = setTimeout(() => {

                this.contattoAttivo.messages.push({

                    date: this.europaDate(new Date()),
                    message: "Al momento non posso parlare, scusami. (messaggio inviato automaticamente)",
                    status: "received",

                });

            }, 1000);
        },

        //cencellazione messaggio
        cancellaMessaggio(index) {
            this.contattoAttivo.messages.splice(index, 1);
        },


        //mostra l'ultimo messaggio all'interno della sidebar
        ultimoMessaggio(contatto) {
            
            //console.log("Contatto:", contatto);

            if (contatto.messages.length > 0) {

                const lastMsg = contatto.messages[contatto.messages.length - 1];
                //console.log("Ultimo messaggio:", lastMsg);
                

                return lastMsg.message;

            } else {

                return "";

            }
        },


        //modifica ora e data msg (al momento solo di quelli inviati e ricevuti)
        europaDate(date) {
            const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
            return new Date(date).toLocaleDateString('it-IT', options);
        }

    },


    mounted() {

        this.selezionePrimoContatto();

    }

}).mount("#app");