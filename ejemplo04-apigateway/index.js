const express = require("express")
const {createProxyMiddleware} = require('http-proxy-middleware') 

const app = express();
const PORT=3000;

//dEFINIR LAS RUTAS Y LOS DESTINOS DE LOS SERVICIOS

const services =[
    {path:'/servicio1' ,target:'http://localhost:3001'}
    {path:'/servicio2' ,target:'http://localhost:3002'}
]

//Configyrar el middleware de proxy para cada servicio

services.forEach(({path,target})=> {
    app.use(path,createProxyMiddleware({target,changeOrigin:true}));
})

//Inicia el servidor

app.listen(PORT,() =>{
    console.log("mensaje por consola")
})