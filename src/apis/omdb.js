import axios from 'axios'

const URL = 'https://www.omdbapi.com/'
const API_KEY = '69bffd8e'

const omdbapi = async (params) => (
    await axios.get(`${URL}/?apikey=${API_KEY}`,{params})
)

export {omdbapi}