<template>
  <div>
    <div class="row">
      <div class="col-4 mt-4 mr-4 container-fluid">
        <h3>Partidas</h3>

        <table class="table table-hover">
          <!-- <thead>
            <th>jugador</th>
            <th>estado</th>
          </thead>-->
          <tbody>
            <tr v-for="partida in partidas" :key="partida">
              <td>{{partida.jugador}}</td>
              <td class="text-right pr-5">
                <b-button 
                  v-if="partida.estado =='success'"
                  v-on:click="setModalTurno(partida.jugador, partida.estado)"
                  @click="toggleModal"
                  style="width: 100px"
                  type="button"
                  :class="`btn btn-${partida.estado}`"
                >En espera</b-button>
                <b-button
                  v-if="partida.estado == 'danger'"
                  v-on:click="setModalTurno(partida.jugador, partida.estado)"
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
              <td>{{jugador.nombre}}</td>
              <td class="text-right pr-5">
                <button
                  v-on:click="setModalNuevaPartida(jugador.nombre)"
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

    <div class="row">
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

    <div class="row">
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

    <div class="row">
      <b-modal ref="nueva-partida-modal" hide-footer title>
        <div class="d-block text-center">
          <img
            class="align-middle"
            style="width: 230px"
            :src="require('../assets/gestos-chuck-norris/chuckNuevaPartida.png')"
          />
          <h3>Nueva partida vs {{versus}}!</h3>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">COMENZAR</b-button>
        <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">CANCELAR</b-button>
      </b-modal>
    </div>
  </div>
</template>


<style>
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
export default {
  name: "partidas",
  data: function() {
    return {
      jugadores: [
        { nombre: "mkraitman" },
        { nombre: "sgutierrez" },
        { nombre: "xpersona" },
        { nombre: "ratonperez" },
        { nombre: "AAAAAaaaaa" },
        { nombre: "EEEEEeeeee" },
        { nombre: "mkraitman" },
        { nombre: "sgutierrez" },
        { nombre: "sgutierrez" },
        { nombre: "xpersona" },
        { nombre: "ratonperez" },
        { nombre: "AAAAAaaaaa" },
        { nombre: "mkraitman" },
        { nombre: "sgutierrez" },
        { nombre: "xpersona" },
        { nombre: "sgutierrez" },
        { nombre: "xpersona" },
        { nombre: "ratonperez" },
        { nombre: "AAAAAaaaaa" },
        { nombre: "mkraitman" },
        { nombre: "sgutierrez" },
        { nombre: "xpersona" },
        { nombre: "xpersona" },
        { nombre: "ratonperez" },
        { nombre: "AAAAAaaaaa" },
        { nombre: "mkraitman" },
        { nombre: "sgutierrez" },
        { nombre: "xpersona" },
        { nombre: "ratonperez" },
        { nombre: "AAAAAaaaaa" },
        { nombre: "mkraitman" },
        { nombre: "sgutierrez" },
        { nombre: "xpersona" },
        { nombre: "ratonperez" },
        { nombre: "AAAAAaaaaa" }
      ],

      /** danger = tu turno | success = en espera **/
      partidas: [
        { jugador: "AAAAAaaaaa", estado: "danger" },
        { jugador: "SAASDADA", estado: "success" },
        { jugador: "xpersona", estado: "danger" },
        { jugador: "xpersona", estado: "danger" },
        { jugador: "xpersona", estado: "success" },
        { jugador: "xpersona", estado: "danger" },
        { jugador: "xpersona", estado: "success" },
        { jugador: "xpersona", estado: "danger" },
        { jugador: "xpersona", estado: "success" },
        { jugador: "xpersona", estado: "danger" },
        { jugador: "xpersona", estado: "success" },
        { jugador: "xpersona", estado: "danger" },
        { jugador: "xpersona", estado: "success" },
        { jugador: "xpersona", estado: "danger" },
        { jugador: "xpersona", estado: "success" },
        { jugador: "xpersona", estado: "danger" },
        { jugador: "xpersona", estado: "success" },
        { jugador: "xpersona", estado: "danger" },
        { jugador: "xpersona", estado: "danger" }
      ],
      versus: "",
      showModal: false,
      modalName: ""
    };
  },
  methods: {
    setModalTurno(vs, estado) {
      this.versus = vs;
      if (estado != "success") {
        this.modalName = "turno-modal";
      } else {
        this.modalName = "no-turno-modal";
      }
    },
    setModalNuevaPartida(vs) {
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
    }
  }
};
</script>



