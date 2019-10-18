import axios from 'axios'

export default {
    getChisteRandom() {
        return axios.get('https://api.icndb.com/jokes/random')
    }
}
