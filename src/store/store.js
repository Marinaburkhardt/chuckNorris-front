import Vue from 'vue';
import Vuex from 'vuex';

const restServices = require('../services/RestServices.js')

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
        nick: '',
        mail: '',
    },
    mutations: {
        setIsAuthenticated(state, login) {
            state.isAuthenticated = login.autenticado,
            state.nick = login.nick,
            state.mail = login.mail
        }
    },
    actions: {
        async login(state, jsonLogin) {
            await restServices.default.login(jsonLogin).then(function (response) {
                if (response.status == 200) {
                    state.commit("setIsAuthenticated", {
                        nick: response.data.NickJugador,
                        mail: response.data.Mail,
                        autenticado: true
                    })
                }
            }).catch(function (error) {
                console.log(error);
                });
        },
    },
    getters: {
        estaLogueado: state => state.isAuthenticated,
        getNick: state => state.nick,
        getMail: state => state.mail
    }
});