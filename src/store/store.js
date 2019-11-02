import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setIsAuthenticated(state, jsonLogin) {
            // console.log('estado: ', estado)
            console.log('jsonLogin: ', jsonLogin)
            // TODO: pegada al back para chequear si el usuario existe
            state.isAuthenticated = true;
        }
    },  
    // actions: {
    //     loguearse({ commit }, infoLogin) {
    //         console.log('infoLogin: ', infoLogin)
    //         // TODO: pegada al back para chequear si el usuario existe
    //         commit('setIsAuthenticated', {
    //             autenticado: true
    //         })
    //         console.log('this.state.isAuthenticated: ', this.state.isAuthenticated);
    //     }
    // },
    getters: {
        estaLogueado: state => state.isAuthenticated
        // getIsAuthenticated () {
        //     // return getters.isAuthenticated
        //     return this.$store.state.isAuthenticated
        // }
        // isAuthenticated: state => state.isAuthenticated
    }
});