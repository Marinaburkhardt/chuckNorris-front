<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand>
      <router-link to="/inicio" style="color:white">
        <img
          class="align-middle"
          style="width: 100%; max-width: 65px; height: auto;"
          :src="require('../assets/iconoHome.png')"
        />
      </router-link>
      <router-link class="ml-2" to="/inicio" style="color:white">Chuck Norris PPT</router-link>
    </b-navbar-brand>

    <b-navbar-brand class="ml-auto" v-if="!estaLogueado">
      <router-link to="/login" style="color:white">Login</router-link>
    </b-navbar-brand>
    <b-navbar-brand class="ml-auto" v-if="estaLogueado">
      <router-link to="/partidas" style="color:white">Partidas</router-link>
    </b-navbar-brand>
    <!-- <b-navbar-brand class="ml-2" v-if="estaLogueado">
      <router-link to="/juegoFinalizadoGanador" style="color:white">Ganador</router-link>
    </b-navbar-brand>
    <b-navbar-brand class="ml-2" v-if="estaLogueado">
      <router-link to="/juegoFinalizadoPerdedor" style="color:white">Perdedor</router-link>
    </b-navbar-brand> -->
  </b-navbar>
    
</template>

<script>
export default {
  name: "Nav",

  computed: {
    estaLogueado() {
      return this.$store.getters.estaLogueado
    }
  }
};
</script>
