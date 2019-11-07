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
              <template slot="front" @flip="onFlip">
                <img class="imgJugada" src="../assets/background/finalizadoPerdedor.png" />
              </template>
              <template slot="back" v-if="figuraLanzada">
                <img class="imgJugada" src="../assets/background/finalizadoJoke.png" />
              </template>
            </vue-flipcard>
          </div>

          <div class="col-4">
            <vue-flipcard>
              <template slot="front" @flip="onFlip">
                <img class="imgJugada" src="../assets/background/finalizadoPerdedor.png" />
              </template>
              <template slot="back">
                <img class="imgJugada" src="../assets/background/finalizadoJoke.png" />
              </template>
            </vue-flipcard>
          </div>
        </div>

        <br />
        <h5>Elije tu figura!</h5>
        <br />
        <div id="cardsB" class="cards cards--reverse cards--fan cards--overlap">
          <div class="card col-4">
            <div class="flipper">
              <img :src="require(`@/assets/gestos-jugadas/sombrero/sombrero_${numeroRandom}`)" alt="">
            </div>
          </div>
          <div class="card col-4">
            <div class="flipper">
              <img :src="require(`@/assets/gestos-jugadas/gestos/gestos_${numeroRandom}`)" alt="">
            </div>
          </div>
          <div class="card col-4">
            <div class="flipper">
              <img :src="require(`@/assets/gestos-jugadas/armas/armas_${numeroRandom}`)" alt="">
            </div>
          </div>
        </div>
      </div>

      <!-- Instrucciones -->
      <div class="col-2">
        <h5>
          <u>Instrucciones</u>
        </h5>
        <br />
        <p>Los valores de las figuras tienen valores equivalentes al juego "piedra, papel o tijer"</p>

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

export default {
    name: 'Juego',
    
    data: function() {
    return {
      ganadoresTurno: [
        { turno: 1, nick: "mkraitman" },
        { turno: 2, nick: "edditrana" },
        { turno: 3, nick: "edditrana" },
        { turno: 4, nick: "mkraitman" },
        { turno: 5, nick: "edditrana" }
      ],
      figuraLanzada : true,

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
      figuraElegida: ''
    };
    
  },
   created() {
    this.randomPickerFigura();
  },
  methods: {

    develarCarta () {
      this.$refs.flipcard.flip()
    },

    randomPickerFigura (){
      this.numeroRandom = (Math.floor(Math.random() * 4)+1)
      this.numeroRandom = '0' + this.numeroRandom + '.png';
      
    }
  }
}
</script>

<style scoped>
.FlipCard {
  direction: vertical;
  width: 50px;
  height: 50px;
}

.imgJugada {
  position: relative;
  min-width: 3em;
  min-height: 7em;
  display: inline-flex;
}

.example {
  padding: 2em 0;
}
.example[onclick] {
  cursor: pointer;
}

.cards {
  display: inline-flex;
  border: 0.25em solid rgba(0, 0, 0, 0.25);
  border-radius: 0.35em;
  padding: 1em 2em;
  min-width: 3em;
  min-height: 7em;
}

#cardsA {
  font-size: 1.5em;
}

.card {
  cursor: pointer;
  color: #333;
  font-size: 4em;
}
.example .card-group {
  padding: 2em 0;
}

.card.absolute {
  position: absolute;
  top: 0;
  left: 0;
  transition: none;
}

.card.hidden {
  visibility: hidden;
}

.card .face,
.card .back {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  max-width: 40%;
}

.card:hover .face,
.card:hover .back {
  color: hotpink;
}

.card:hover .face:after,
.card:hover .back:after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 0.07em solid;
  border-radius: 0.08em;
  content: "";
}
</style>