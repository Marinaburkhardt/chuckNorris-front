import axios from 'axios'

export default {
    getChisteRandom() {
        return axios.get('https://api.icndb.com/jokes/random')
    },

    getTop5() {
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
    },

    async obtenerDetallePartidas (idPartida) {
        // console.log('nickJugador: ', nickJugador)
        return await axios.get('http://localhost:3000/api/partida/detalles/' + idPartida)
    },

    async comenzarPartida (json) {
        console.log('json: ', json)
        return await axios.post('http://localhost:3000/api/partida/comenzar/', json)
    },
}
    