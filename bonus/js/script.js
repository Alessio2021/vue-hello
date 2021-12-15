// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.


var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Monkey!',
        image: 'https://picsum.photos/200/300',
        text: 'Write on it!',
        image2: 'https://picsum.photos/id/1/200/300',
        number: 5
    },
    methods: {
        myFunction: function () {
            return this.number += 1
        }
    }

})