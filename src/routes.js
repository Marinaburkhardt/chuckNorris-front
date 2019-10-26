import Vue from 'vue'
import Inicio from './components/Inicio.vue';
import Login from './components/Login.vue';
import About from './components/About.vue';
import JuegoFinalizadoGanador from './components/JuegoFinalizadoGanador.vue';
import JuegoFinalizadoPerdedor from './components/JuegoFinalizadoPerdedor.vue';
import Partidas from './components/Partidas';
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
      { path: '/about', component: About },
      { path: '*', redirect: '/' }
    ]
  });
  
  
// router.beforeEach((to, from, next) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ['/login'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');
  
//     if (authRequired && !loggedIn) {
//       return next({ 
//         path: '/login', 
//         query: { returnUrl: to.path } 
//       });
//     }
  
//     next();
//   })