<template>
  <div>
    <br />
    <div class="row" style="width: 100%;overflow-x: scroll(or auto);">
      <div class="col-5 mt-3 mr-3 container-fluid">
        <h3>Partidas</h3>
        <button type="button" class="btn btn-primary" @click="recargarJugadoresPartidas">Recargar</button>

        <table class="table table-hover">
          <tbody>
            <tr v-for="partida in partidas" :key="partida.IdPartida">
              <td>ID: {{partida.IdPartida}} - {{partida.NickJugador}} vs {{partida.NickJugador2}} - {{partida.FechaCreacion || dd/mm}}</td>
              <td class="text-right pr-5">
                <b-button
                  v-if="partida.JugadorPorJugar != jugadorLogueado"
                  v-on:click="setModalTurno(partida.NickJugador, partida.NickJugador2, partida.JugadorPorJugar == jugadorLogueado, partida.IdPartida)"
                  @click="toggleModal"
                  style="width: 100px"
                  type="button"
                  :class="`btn btn-${partida.estado}`"
                >En espera</b-button>
                <b-button
                  v-if="partida.JugadorPorJugar == jugadorLogueado"
                  v-on:click="setModalTurno(partida.NickJugador, partida.NickJugador2, partida.JugadorPorJugar == jugadorLogueado, partida.IdPartida)"
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
      <div class="col-5 mt-3 ml-3 container-fluid">
        <table class="table table-hover">
          <h3>Jugadores</h3>
          <tbody class>
            <tr v-for="jugador in jugadores" :key="jugador.NickJugador">
              <td>{{jugador.NickJugador}}</td>
              <td class="text-right pr-5">
                <button
                  v-on:click="setModalNuevaPartida(jugador.NickJugador, jugador.Mail)"
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
        <b-button class="mt-3" variant="outline-danger" block @click="continuarPartida">JUGAR</b-button>
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
const RestServices = require("../services/RestServices.js");

export default {
  name: "partidas",

  created() {
    this.partidas = this.$store.getters.getPartidas;
    this.jugadorLogueado = this.$store.getters.getNick;
    this.jugadores = this.$store.getters.getJugadores;
  },
  data: function() {
    return {
      jugadores: "",
      jugadorLogueado: "",
      partidas: "",
      versus: "",
      modalName: "",
      idPartidaSeleccionada: "",
      mailJugadorSeleccionado: ""
    };
  },
  methods: {
    setModalTurno(jugador1, jugador2, esIgualAlLogueado, idPartida) {
      this.idPartidaSeleccionada = idPartida;
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
    setModalNuevaPartida(vs, jugadorMail) {
      this.versus = vs;
      this.mailJugadorSeleccionado = jugadorMail;
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
    continuarPartida() {
      this.$router.push("juego/:" + this.idPartidaSeleccionada);
    },
    async comenzarPartida(nickJugador1, nickJugador2) {
      let json = {
        nickJugador1: this.jugadorLogueado,
        MailJugador1: this.$store.getters.getMail,
        nickJugador2: this.versus,
        MailJugador2: this.mailJugadorSeleccionado
      };
      let respuestaComenzar = await RestServices.default.comenzarPartida(json);
      this.idPartidaSeleccionada = respuestaComenzar.data[0].IdPartida;
      this.continuarPartida();
    },
    recargarJugadoresPartidas() {
      this.$store.dispatch("recargarPartidasJugadores", {
        nick: this.$store.getters.getNick
      });
      this.partidas = this.$store.getters.getPartidas;
      this.jugadorLogueado = this.$store.getters.getNick;
      this.jugadores = this.$store.getters.getJugadores;
    }
  },

  computed: {
    estaLogueado() {
      return this.$store.getters.estaLogueado;
    }
  }
};
</script>


