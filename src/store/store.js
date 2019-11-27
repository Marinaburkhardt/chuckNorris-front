import Vue from 'vue';
import Vuex from 'vuex';

const restServices = require('../services/RestServices.js')

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
        nick: '',
        mail: '',
        partidas: '',
        jugadores: '',
    },
    mutations: {
        setIsAuthenticated(state, login) {
            state.isAuthenticated = login.autenticado,
            state.nick = login.nick,
            state.mail = login.mail,
            state.jugadores = login.jugadores,
            state.partidas = login.partidas
        },
        setPartidasJugadores(state, datos) {
            state.jugadores = datos.jugadores,
            state.partidas = datos.partidas
        }
    },
    actions: {
        async login(state, jsonLogin) {
            try {
                let responseLogin = await restServices.default.login(jsonLogin)
                // console.log('responseLogin: ', responseLogin.data)
                if (responseLogin.status == 200) {
                    let responseObtenerPartidas = await restServices.default.obtenerPartidas(responseLogin.data.NickJugador);
                    let responseObtenerJugadores = await restServices.default.obtenerJugadores(responseLogin.data.NickJugador);
                    // console.log('responseObtenerPartidas: ', responseObtenerPartidas.data)
                    // console.log('responseObtenerJugadores: ', responseObtenerJugadores.data)
                    state.commit("setIsAuthenticated", {
                        nick: responseLogin.data.NickJugador,
                        mail: responseLogin.data.Mail,
                        autenticado: true,
                        jugadores: responseObtenerJugadores.data,
                        partidas: responseObtenerPartidas.data
                    })
                }
            } catch (error) {
                // console.log(error)
            }
        },
        async recargarPartidasJugadores(state, nickJugador) {
            let responseObtenerPartidas = await restServices.default.obtenerPartidas(nickJugador);
            let responseObtenerJugadores = await restServices.default.obtenerJugadores(nickJugador);
            console.log('responseObtenerPartidas: ', responseObtenerPartidas.data)
            console.log('responseObtenerJugadores: ', responseObtenerJugadores.data)
            state.commit("setPartidasJugadores", {
                jugadores: responseObtenerJugadores.data,
                partidas: responseObtenerPartidas.data
            })
        }
    },
    getters: {
        estaLogueado: state => state.isAuthenticated,
        getNick: state => state.nick,
        getMail: state => state.mail,
        getJugadores: state => state.jugadores,
        getPartidas: state => state.partidas
    }
});