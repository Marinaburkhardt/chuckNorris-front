<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-link to="/inicio">inicio</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Inicio from './components/Inicio.vue'

export default {
  name: 'app',
  components: {
    Inicio
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
