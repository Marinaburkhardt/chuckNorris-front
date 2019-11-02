import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setIsAuthenticated(state, jsonLogin) {
            // TODO: pegada al back para validar si existe o no el jugador
            state.isAuthenticated = true;
        }
    },  
    getters: {
        estaLogueado: state => state.isAuthenticated
    }
});