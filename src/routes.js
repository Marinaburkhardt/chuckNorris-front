import Vue from 'vue'
import Inicio from './components/Inicio.vue';
import Login from './components/Login.vue';
import About from './components/About.vue';
import JuegoFinalizadoGanador from './components/JuegoFinalizadoGanador.vue';
import JuegoFinalizadoPerdedor from './components/JuegoFinalizadoPerdedor.vue';
import Partidas from './components/Partidas';
import Juego from './components/Juego';
import VueRouter from 'vue-router'
import Router from 'vue-router';

Vue.use(Router);


export const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', component: Inicio },
      { path: '/inicio', component: Inicio },
      { path: '/about', component: About },
      { path: '/login', component: Login },
      { path: '/partidas', component: Partidas},
      { path: '/juegoFinalizadoGanador', component: JuegoFinalizadoGanador },
      { path: '/juegoFinalizadoPerdedor', component: JuegoFinalizadoPerdedor },
      // { path: '/juego', component: Juego },
      { path: '/juego/:id', component: Juego, props: true },
      { path: '/about', component: About },
      { path: '*', redirect: '/' }
    ]
  });
