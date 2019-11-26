<template>
  <div>
    <br>
    <div class="row" style="width: 100%;overflow-x: scroll(or auto);">
      <div class="col-4 mt-4 mr-4 container-fluid">
        <h3>Partidas</h3>

        <table class="table table-hover">
          <!-- <thead>
            <th>jugador</th>
            <th>estado</th>
          </thead>-->
          <!-- 
IdPartida: (...)
JugadorPorJugar: (...)
NickJugador: (...)
NickJugador2: ( 
  obtenerJugadorLogueado()
  
  -->
          <tbody>
            <tr v-for="partida in partidas" :key="partida">
              <td>{{partida.NickJugador}} vs {{partida.NickJugador2}}</td>
              <td class="text-right pr-5">
                <b-button 
                  v-if="partida.JugadorPorJugar != jugadorLogueado"
                  v-on:click="setModalTurno(partida.NickJugador, partida.NickJugador2, partida.JugadorPorJugar == jugadorLogueado)"
                  @click="toggleModal"
                  style="width: 100px"
                  type="button"
                  :class="`btn btn-${partida.estado}`"
                >En espera</b-button>
                <b-button
                  v-if="partida.JugadorPorJugar == jugadorLogueado"
                  v-on:click="setModalTurno(partida.NickJugador, partida.NickJugador2, partida.JugadorPorJugar == jugadorLogueado)"
                  @click="toggleModal"
                  style="width: 100px"
                  type="button"
                  :class="`btn btn-${partida.estado}`"
                >Tu turno</b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-4 mt-4 ml-4 container-fluid">
        <table class="table table-hover">
          <h3>Jugadores</h3>
          <tbody class>
            <tr v-for="jugador in jugadores" :key="jugador">
              <td>{{jugador.NickJugador}}</td>
              <td class="text-right pr-5">
                <button
                  v-on:click="setModalNuevaPartida(jugador.NickJugador)"
                  @click="toggleModal"
                  style="width: 70px"
                  type="button"
                  class="btn btn-warning"
                >
                  <img
                    class="align-middle"
                    style="width: 30px"
                    :src="require('../assets/gestos-chuck-norris/chuckNorrisIcon.png')"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row" style="width: 100%;overflow-x: scroll(or auto);">
      <b-modal ref="turno-modal" hide-footer title>
        <div class="d-block text-center">
          <img
            class="align-middle"
            style="width: 250px"
            :src="require('../assets/gestos-chuck-norris/chuckTuTurno.png')"
          />
          <h3>Tu turno vs {{versus}}!</h3>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">JUGAR</b-button>
        <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">CANCELAR</b-button>
      </b-modal>
    </div>

    <div class="row" style="width: 100%;overflow-x: scroll(or auto);">
      <b-modal ref="no-turno-modal" hide-footer title>
        <div class="d-block text-center">
          <img
            class="align-middle"
            style="width: 200px"
            :src="require('../assets/gestos-chuck-norris/chuckEnEspera.png')"
          />
          <h3>Todavia es el turno de {{versus}}!</h3>
        </div>
        <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">CERRAR</b-button>
      </b-modal>
    </div>

    <div class="row" style="width: 100%;overflow-x: scroll(or auto);">
      <b-modal ref="nueva-partida-modal" hide-footer title>
        <div class="d-block text-center">
          <img
            class="align-middle"
            style="width: 230px"
            :src="require('../assets/gestos-chuck-norris/chuckNuevaPartida.png')"
          />
          <h3>Nueva partida vs {{versus}}!</h3>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="comenzarPartida()">COMENZAR</b-button>
        <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">CANCELAR</b-button>
      </b-modal>
    </div>
  </div>
</template>


<style scoped>
/* table scroll */
tr {
  width: 100%;
  display: inline-table;
}

table {
  height: 300px;
}
tbody {
  overflow-y: scroll;
  height: 400px;
  width: 100%;
  position: absolute;
}
/* table scroll */
</style>



<script>
const RestServices = require('../services/RestServices.js');
// import RestServices from "@/services/RestServices";

export default {
  name: "partidas",
  
  async created() {
    await this.obtenerDatos();
    // this.obtenerJugadores();
  },
  data: function() {
    return {
      jugadores: '',
      jugadorLogueado: '',
      partidas: '',
      versus: "",
      showModal: false,
      modalName: ""
    };
  },
  methods: {
    setModalTurno(jugador1, jugador2, esIgualAlLogueado) {
      if (jugador1 == this.jugadorLogueado) {
        this.versus = jugador2;
      } else {
        this.versus = jugador1;
      }
      if (esIgualAlLogueado) {
        this.modalName = "turno-modal";
      } else {
        this.modalName = "no-turno-modal";
      }
    },
    setModalNuevaPartida(vs) {
      console.log('vs: ', vs)
      this.versus = vs;
      this.modalName = "nueva-partida-modal";
    },
    showModal() {
      this.$refs[this.modalName].show();
    },
    hideModal() {
      this.$refs[this.modalName].hide();
    },
    toggleModal() {
      this.$refs[this.modalName].toggle("#toggle-btn");
    },
    async comenzarPartida (nickJugador1, nickJugador2) {
      let json = { nickJugador1: this.jugadorLogueado, nickJugador2: this.versus }
      console.log('json: ', json)
      let respuestaComenzar = await RestServices.default.comenzarPartida(json);
      console.log('respuestaComenzar.data[0].IdPartida: ', respuestaComenzar.data[0].IdPartida);
      this.hideModal();
    }
  },
  computed: {
    estaLogueado() {
      return this.$store.getters.estaLogueado
    },
    obtenerDatos() {
      this.partidas = this.$store.getters.getPartidas
      this.jugadorLogueado = this.$store.getters.getNick
      this.jugadores = this.$store.getters.getJugadores
    },
  }
};
</script>


