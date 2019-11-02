import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setIsAuthenticated(estado) {
            console.log('estado: ', estado)
            state.isAuthenticated = estado;
        }
    },
    actions: {
        loguearse({ dispatch }, infoLogin) {
            console.log('infoLogin: ', infoLogin)
            // TODO: pegada al back para chequear si el usuario existe
            dispatch('setIsAuthenticated', {
                autenticado: true
            })
            // commit('setIsAuthenticated', {
            //     autenticado: true
            // })
            console.log('this.state.isAuthenticated: ', this.state.isAuthenticated);
        }
    },
    getters: {
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        }
        // isAuthenticated: state => state.isAuthenticated
    }
});