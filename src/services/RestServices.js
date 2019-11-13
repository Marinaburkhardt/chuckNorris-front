import axios from 'axios'

export default {
    getChisteRandom() {
        return axios.get('https://api.icndb.com/jokes/random')
    },

    login(json) {
        console.log('json:', json)
        return axios.post('http://localhost:3000/api/jugador/login',json)
    }
}
    