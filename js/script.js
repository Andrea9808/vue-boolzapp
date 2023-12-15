const { createApp } = Vue;

createApp({

    data(){

        return{

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
            timerRisposta:0,

        }

        
    },

    

   
    methods:{

        //seleziono il primo contatto della chat all'avvio dell'app
        selezionePrimoContatto() {
            if (this.contacts.length > 0) {
                this.contattoAttivo = this.contacts[0];
            }
        },
        

        //al click della card
        selezioneContattoAttivo(contatto){
            this.contattoAttivo = contatto;
        },


        //scrivo messaggio
        aggiungiMessaggio(){
            this.contattoAttivo.messages.push({
                date: "10/01/2020 15:50:00", //esempio
                message: this.nuovoMessaggio,
                status: "sent",
            })

            this.nuovoMessaggio = "";

            this.risposta();
            
        },
       
       

        //risposta automatica dopo 1 s

        risposta() {

            this.timerRisposta = setInterval(() => {

                this.contattoAttivo.messages.push({
                    date: "10/01/2020 15:50:00", //esempio
                    message: "ok",
                    status: "received",
                    

                });

                clearInterval(this.timerRisposta);
                
            }, 1000);
        },
        
    },

    mounted(){

        this.selezionePrimoContatto();
        
    }

}).mount("#app");