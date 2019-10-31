import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setIsAuthenticated(estado) {
            state.isAuthenticated = estado;
        }
    },
    actions: {
        loguearse({ commit }, infoLogin) {
            console.log('infoLogin: ', infoLogin)
            // TODO: pegada al back para chequear si el usuario existe
            commit('setIsAuthenticated(true)')
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