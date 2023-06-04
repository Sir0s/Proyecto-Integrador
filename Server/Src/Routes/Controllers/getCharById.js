const axios = require('axios') 
const URL = 'https://rickandmortyapi.com/api/character/ '
const getCharById = (res,id) => {
axios.get(URL+id).then((response)=>{
    const {data} = response
    const character = {
        id : data.id,
        name : data.name,
        gender : data.gender,
        species : data.species,
        origin : data.origin,
        image : data.image,
        status : data.status
    }
    res.writeHead(200,{'Content-Type': 'application/json'})
    return res.end(JSON.stringify(character))
}).catch((error)=>{res.writeHead(500, {'Content-Type': 'text/plain'}); return res.end(error.response.data.error)})
}

module.exports = getCharById;