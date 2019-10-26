import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setIsAuthenticated(estado) {
            state.isAuthenticated = estado;
        }
    },
    actions: {

    },
    getters: {
        isAuthenticated: state => state.isAuthenticated
    }
});