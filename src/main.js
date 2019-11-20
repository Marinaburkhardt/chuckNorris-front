import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { router } from './routes';
import store from './store/store'; 
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2';

// Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueSweetalert2)
// Vue.use(Alerts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');