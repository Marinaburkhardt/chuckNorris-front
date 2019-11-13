import axios from 'axios'

export default {
    getChisteRandom() {
        return axios.get('https://api.icndb.com/jokes/random')
    },

    getTop5() {
        console.log("getTop5")
        return axios.get('http://localhost:3000/api/jugador/top5')
    }
}
    