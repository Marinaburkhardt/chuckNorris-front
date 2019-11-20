import axios from 'axios'

export default {
    getChisteRandom() {
        return axios.get('https://api.icndb.com/jokes/random')
    },

    async login(json) {
        return await axios.post('http://localhost:3000/api/jugador/login',json)
    }
}
    