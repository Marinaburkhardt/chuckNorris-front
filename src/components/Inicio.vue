<template>
  <div>
    <br />
    <h1 style="text-align: center">BIENVENIDO A TU MUERTE</h1>
    <br />
    <br />
    <!-- <img src="../assets/chuck-inicio.png"> -->
    <div class="hello; col-sm-3 offset-8">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Top 5</th>
            <th scope="col">Jugador</th>
            <th scope="col">Partidas Ganadas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Marina</td>
            <td>20</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Martin</td>
            <td>15</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Ezequiel</td>
            <td>10</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Gaspar</td>
            <td>8</td>
          </tr>
          <tr>
            <th>5</th>
            <td>Mariano</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Inicio",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
