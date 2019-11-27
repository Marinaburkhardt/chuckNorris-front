<template>
  <div class="container-fluid">
    <br />
    <div class="row" style="width: 100%;overflow-x: scroll(or auto);">
      <!-- Estado de partida -->
      <div class="col-2">
        <h5>Resultados partidas</h5>
        <table>
          <thead>
            <tr>
              <th style="text-align: center">N° turno</th>
              <th style="text-align: center">Ganador</th>
            </tr>
          </thead>
          <tbody v-for="jugador in ganadoresTurno" :key="jugador">
            <tr>
              <th style="text-align: center">{{jugador.turno}}</th>
              <td style="text-align: center">{{jugador.nick}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Parte principal -->
      <div class="col-8 d-flex flex-column">
        <h5>A jugar!</h5>

        <div class="row justify-content-around">
          <div class="col-4">
            <vue-flipcard>
              <!-- @flip="onFlip" -->
              <template slot="front">
                <img class="imgJugada" src="../assets/interrogation.png" />
              </template>
              <template slot="back">
                <img class="imgJugada" src="../assets/background/finalizadoJoke.png" />
              </template>
            </vue-flipcard>
          </div>

          <div class="col-4">
            <vue-flipcard>
              <template slot="front">
                <img class="imgJugada" src="../assets/tuTurno.jpg" />
              </template>
              <template slot="back" v-if="this.figuraLanzada && this.figuraLanzadaArma">
                <img class="imgJugada" :src="require(`@/assets/gestos-jugadas/armas/armas_${numeroRandom}`)">
              </template>
              <template slot="back" v-if="this.figuraLanzada && this.figuraLanzadaGesto">
                <img class="imgJugada" :src="require(`@/assets/gestos-jugadas/gestos/gestos_${numeroRandom}`)">
              </template>
              <template slot="back" v-if="this.figuraLanzada && this.figuraLanzadaSombrero">
                <img class="imgJugada" :src="require(`@/assets/gestos-jugadas/sombrero/sombrero_${numeroRandom}`)">
              </template>
            </vue-flipcard>
          </div>

        </div>

        <br />
        <h5>Elije tu figura!</h5>
        <br />
        
        <div class="cards" id="figuraJugada">
            <div v-on:click="setearAFiguraLanzada('sombrero')" class="card col-4">
              <img class="imgJugada" :src="require(`@/assets/gestos-jugadas/sombrero/sombrero_${numeroRandom}`)">
            </div>
            <div v-on:click="setearAFiguraLanzada('gesto')" class="card col-4">
              <img class="imgJugada" :src="require(`@/assets/gestos-jugadas/gestos/gestos_${numeroRandom}`) ">
            </div>
            <div v-on:click="setearAFiguraLanzada('arma')" class="card col-4">
              <img class="imgJugada" :src="require(`@/assets/gestos-jugadas/armas/armas_${numeroRandom}`)">
            </div>
        </div>

      </div>

      <!-- Instrucciones -->
      <div class="col-2">
        <h5>
          <u>Instrucciones</u>
        </h5>
        <br />
        <p>Los valores de las figuras tienen valores equivalentes al juego "piedra, papel o tijera"</p>

        <table>
          <thead>
            <tr>
              <th style="text-align: center" scope="col">Figura</th>
              <th style="text-align: center" scope="col">Equivalente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style="text-align: center">Arma</th>
              <td style="text-align: center">Piedra</td>
            </tr>
            <tr>
              <th style="text-align: center">Sonrisa</th>
              <td style="text-align: center">Papel</td>
            </tr>
            <tr>
              <th style="text-align: center">Sombrero</th>
              <td style="text-align: center">Tijera</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import RestServices from "@/services/RestServices";

export default {
    name: 'Juego',
    props: ['id'],
    
    data: function() {
    return {
      detallePartida: '',
      idPartida: '',
      ganadoresTurno: '',
      figuraLanzada : false,
      figuraLanzadaSombrero : false,
      figuraLanzadaGesto: false,
      figuraLanzadaArma: false,

      numeroRandom: '',
      
      figurasSombrero: [
        "../assets/gestos-jugadas/sombrero/sombrero_01.png",
        "../assets/gestos-jugadas/sombrero/sombrero_02.png",
        "../assets/gestos-jugadas/sombrero/sombrero_03.png",
        "../assets/gestos-jugadas/sombrero/sombrero_04.png",
      ],
      figurasSonrisa: [
        "../assets/gestos-jugadas/gestos/gestos_01.png",
        "../assets/gestos-jugadas/gestos/gestos_02.png",
        "../assets/gestos-jugadas/gestos/gestos_03.png",
        "../assets/gestos-jugadas/gestos/gestos_04.png"
      ],
      figurasArmas: [
        "../assets/gestos-jugadas/armas/armas_01.png",
        "../assets/gestos-jugadas/armas/armas_02.png",
        "../assets/gestos-jugadas/armas/armas_03.png",
        "../assets/gestos-jugadas/armas/armas_04.png"
      ],
      figuraElegida: '',
      pathAFiguraJugadaJugador2: ''
    };
    
  },
   created() {
    this.randomPickerFigura();

    this.idPartida = window.location.pathname.split(':')[1];
    // console.log("el id es...."+ this.idPartida)    

    RestServices.obtenerDetallePartidas(this.idPartida)
      .then(response => {
        this.detallePartida = response.data[1]
        console.log("detalle partida: "+ this.detallePartida)
      // console.log("console de saraza" + response.data)
      // this.ganadoresTurno = response.data
    })
    .catch(error => console.log(error));
  },
  methods: {

    setearAFiguraLanzada(eleccion) {
      this.figuraLanzada = true;
      this.figuraElegida = eleccion;
      // console.log("pasó a true? -->" + this.figuraLanzada)
      if (eleccion == "sombrero"){
        this.figuraLanzadaSombrero = true;
      } else if (eleccion == "arma"){
        this.figuraLanzadaArma = true;
      } else {
        this.figuraLanzadaGesto = true;
      }
      // console.log(this.figuraElegida)
      // console.log(this.pathAFiguraJugadaJugador2)

    },

    randomPickerFigura (){
      this.numeroRandom = (Math.floor(Math.random() * 4)+1)
      this.numeroRandom = '0' + this.numeroRandom + '.png';
    },

    onManualFlip () {
      this.$refs.flipcard.flip()
    }
  }
}
</script>

<style scoped>

.imgJugada {
  position: relative;
  max-width:100%;
  max-height:100%;
  display: inline-flex;
  justify-content: center;
}

.cards {
  display: inline-flex;
  position: relative;
  border: 0.25em solid rgba(0, 0, 0, 0.25);
  border-radius: 0.35em;
  padding: 1em 2em;
}

.card {
  display: inline-flex;
  position: relative;
  background-size:cover;
  max-width:100%;
  max-height:100%;
  
}
</style>