import Vue from 'vue'
import App from './App.vue'
import Inicio from './components/Inicio.vue';
import Login from './components/Login.vue';
import About from './components/About.vue';
import JuegoFinalizado from './components/JuegoFinalizado.vue';
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/inicio', component: Inicio },
    { path: '/', component: Inicio },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/juegoFinalizado', component: JuegoFinalizado },
    { path: '/about', component: About }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');