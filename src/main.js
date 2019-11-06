import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { router } from './routes';
import store from './store/store'; 
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Alerts from "./services/Alerts";

// Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Vuex)
// Vue.use(Alerts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Alerts,
  render: h => h(App),
}).$mount('#app');