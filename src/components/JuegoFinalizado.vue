<template>
  <div>
    <div class="speech-bubble">
      {{currentJoke.joke}}
    </div>

    <!-- solo para debuggear es el boton! borrar luego -->
    <button @click="fetchRandomJoke()">
        Queres un chiste random? clickeame
    </button>
    <img src="../assets/background/finalizadoJoke.png" alt="backgound" class="bg" />
  </div>
</template>

<script>
import axios from 'axios'

const API_RANDOM_JOKE_ENDPOINT = 'https://api.icndb.com/jokes/random'

export default {
    name: 'JuegoFinalizado',

    mounted() {
      this.fetchRandomJoke()
    },

    data: function() {
      return {
        currentJoke: null
      }
    },

    methods: {
      fetchRandomJoke() {
        axios.get(API_RANDOM_JOKE_ENDPOINT)
          .then(({ data }) => this.currentJoke = data.value)
      }
    }
}
</script>

<style scoped>

img.bg {
  min-height: 30%;
  max-width: 30%;
  height: auto;
  position: relative;
  top: 0;
  left: 10%;
  float: left ;
}

button {
  background-color: rgb(59, 186, 0);
  border-radius: 8px;
  float: inline-end;
}

.speech-bubble {
  position: relative;
  background: #ca7a12;
  border-radius: .4em;
  padding: 15px;
  text-align: center;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
}
.speech-bubble:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: auto;
  height: auto;
  border: 51px solid transparent;
  border-top-color: #ca7a12;
  border-bottom: 0;
  border-left: 0;
  margin-left: -25.5px;
  margin-bottom: -51px;
}

</style>