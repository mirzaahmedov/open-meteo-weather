import axios from 'axios'

export default axios.create({
  baseURL: 'https://wft-geo-db.p.rapidapi.com/v1',
  headers: {
    'X-RapidAPI-Key': '20fd38bd15msh123825155ba2b95p1e2b29jsn3ec3d7ce57a0',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
})
