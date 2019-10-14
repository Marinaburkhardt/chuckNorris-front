<template>
  <div>
    <br />
    <h1 style="text-align: center">BIENVENIDO A TU MUERTE</h1>
    <br />
    <div class="row" style="width: 100%;overflow-x: scroll(or auto);">
      <div class="col-sm-2 offset-2">
        <router-link to="/login" style="color:white">
          <img class="align-middle" :src="require('../assets/chuck-Inicio2.png')" />
        </router-link>
      </div>
      <div class="col-sm-3 offset-4">
        <table class="table table-hover">
          <thead>
            <tr>
              <th style="text-align: center" scope="col">Top 5</th>
              <th style="text-align: center" scope="col">Jugador</th>
              <th style="text-align: center" scope="col">Ganadas</th>
            </tr>
          </thead>
          <tbody v-for="jugador in mejoresJugadores" :key="jugador">
            <tr>
              <th style="text-align: center">{{jugador.posicion}}</th>
              <td style="text-align: center">{{jugador.nick}}</td>
              <td style="text-align: center">{{jugador.ganadas}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Inicio",
  data: function() {
    return {
      mejoresJugadores: [
        { posicion: 1, nick: "mkraitman", ganadas: 25 },
        { posicion: 2, nick: "mburkhardt", ganadas: 20 },
        { posicion: 3, nick: "edditrana", ganadas: 18 },
        { posicion: 4, nick: "maquino", ganadas: 15 },
        { posicion: 5, nick: "gaspar", ganadas: 10 }
      ]
    };
  }
};
</script>





