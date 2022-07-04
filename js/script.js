// // Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue(
    {
        el: '#root',
        data: {
          randomemail: null,
          emailList: [],
        },
        methods: {
          randomemailapi() {
            //Salvo le email nell'array
            for (let i = 10; i > this.emailList.length; i--) {
              //Attraverso l'HTTP richiamo le email
              axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
              .then((response) => {
                this.randomemail = response.data.response;
                // Pusho le email dentro l'array
                this.emailList.push(this.randomemail);
              });       
            }              
          }
        },
        mounted() {
          this.randomemailapi();
        }
    }
  );