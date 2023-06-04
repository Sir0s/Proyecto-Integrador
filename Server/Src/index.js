const http = require ('http');
const PORT = 3001;
const data = require('./Routes/Utils/data.js');
const getCharById = require('./Routes/Controllers/getCharById.js');

http.createServer((require,response)=> {
    response.setHeader('Access-Control-Allow-Origin','*')
    const {url} = require;
    
    if (url.includes("/rickandmorty/character")){
        const id = url.split("/").at(-1);
        return getCharById(response,id);
    }
}).listen(PORT, ()=>{
    console.log("Servidor escuchando en puerto "+PORT)
})