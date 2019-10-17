<template>
  <div>
      <div class="row justify-content-around" style="width: 100%;overflow-x: scroll(or auto);">
       
        <!-- Estado de partida -->
        <div class="col-sm-1">
          <h5>Resultados partidas</h5>

          <table class="table">
          <thead>
            <tr>
              <th style="text-align: center" >N° turno</th>
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
        <div class="col-sm-1">

        <h5>Completame</h5>
          
        </div>

        <!-- Instrucciones -->
        <div class="col-sm-1">
            <h5>Instrucciones</h5>
            <br>
            <h6>Los valores de las figuras tienen valores equivalentes al juego "piedra, papel o tijer"</h6>

          <table class="table">
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
      ]
    };
  }
}
</script>

<style scoped>



</style>