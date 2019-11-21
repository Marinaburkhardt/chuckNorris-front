import axios from 'axios'

export default {
    getChisteRandom() {
        return axios.get('https://api.icndb.com/jokes/random')
    },

    getTop5() {
        console.log("getTop5")
        return axios.get('http://localhost:3000/api/jugador/top5')
    },

    async obtenerTop5() {
        return await axios.get('http://localhost:3000/api/jugador/top5')
    },
    
    async login(json) {
        return await axios.post('http://localhost:3000/api/jugador/login',json)
    },

    async obtenerPartidas (nickJugador) {
        console.log('nickJugador: ', nickJugador)
        return await axios.get('http://localhost:3000/api/partida/partidas/' + nickJugador)
    },

    async obtenerJugadores(nickJugador) {
        console.log('nickJugador: ', nickJugador)
        return await axios.get('http://localhost:3000/api/jugador/jugadores/' + nickJugador)
    }
}
    