import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { router } from './routes';
import store from './store/store'; 
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueFlipcard from 'vue-flipcard';

// Vue.use(VueRouter)
Vue.component('vue-flipcard', VueFlipcard)
Vue.use(BootstrapVue)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');