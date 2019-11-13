<template>
  <div>
    <br />
    <h1 style="text-align: center">BIENVENIDO A TU MUERTE</h1>
    <br />
    <div class="row" style="width: 100%;overflow-x: scroll(or auto);">
      <div class="col-sm-2 offset-2">
        <router-link to="/login" style="color:white">
          <img class="align-middle" :src="require('../assets/chuck-Inicio2.png')" />zz
        </router-link>
      </div>
      <div class="col-sm-3 offset-4" v-if="cargado">
        <table class="table table-hover">
          <thead>
            <tr>
              <th style="text-align: center" scope="col">Top 5</th>
              <th style="text-align: center" scope="col">Jugador</th>
              <th style="text-align: center" scope="col">Ganadas</th>
            </tr>
          </thead>
          <tbody v-for="jugador in mejoresJugadores" :key="jugador.NickJugador">
            <tr>
              <th style="text-align: center">{{jugador.posicion}}</th>
              <td style="text-align: center">{{jugador.NickJugador}}</td>
              <td style="text-align: center">{{jugador.PartidasGanadas}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import RestServices from "@/services/RestServices";

export default {
  name: "Inicio",
  data: function() {
    return {
      cargado: false, 
      mejoresJugadores: ''
    };
  },

  created() {
    RestServices.getTop5()
      .then(response => {
      this.mejoresJugadores = response
      this.cargado = true
      console.log(this.mejoresJugadores)
    })
    .catch(error => console.log(error));
  }
};
</script>





