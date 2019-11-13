import Vue from 'vue';
import Vuex from 'vuex';
// import {restServices} from '../services/RestServices.js'

const restServices = require('../services/RestServices.js')

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setIsAuthenticated(state, jsonLogin) {
            console.log('jsonLogin: ', jsonLogin);
            console.log('state: ', state);
            restServices.default.login({
                "nick": "edditrana",
                "password": "admin"
            }).then(function (response) {
                console.log('response: ', response);
                if (response.status == 200) {
                    state.isAuthenticated = true;
                } else {
                    
                }
            })
                .catch(function (error) {
                    console.log(error);
                });

            // TODO: pegada al back para validar si existe o no el jugador
        }
    },
    getters: {
        estaLogueado: state => state.isAuthenticated
    }
});