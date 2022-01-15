import axios from 'axios'

const URL = 'http://www.omdbapi.com/'
const apikey = '69bffd8e'

const omdbapi = async (params) => (
    await axios.get(`${URL}/?apikey=${apikey}`,{params})
)

export {omdbapi}