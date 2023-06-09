const express = require('express');
const server = express();
const PORT = 3001;

server.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next(); 
})

server.listen(PORT, ()=>{
    console.log('Servidor escuchando en el puerto '+PORT)
});