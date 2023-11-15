const express = require('express');
//Controlado Oficial de Mongo para conectarnos desde Node
const mongoose = require('mongoose');

const app = express();
const port = 3000;

//Conectarme a Mongodb

mongoose.connect('mongodb://localhost:27017/bdusuarios', { useNewUrlParser: true, useUnifiedTopology: true });


//Definir un modelo de ejemplo = Tabla
const Usuarios = mongoose.model('Usuarios' , {text:String});

//Definir Nuestras Rutas
app.get('/',(req,res) => {
    res.send('Bienvenido a mi Servicio con NODEJS y MongoDB');
});

app.get('/Usuarios',async(req,res) => {
    const usuarios = await Usuarios.find();
    res.json(usuarios);
})

app.get('/CrearUsuarios',async(req,res)=> {
    const NuevoUsuario = new Usuarios({ text:'Jaime Lopez'});
    await NuevoUsuario.save()
    res.send('Usuario Creado Correctamente');
});

//Iniciar el Servidor

app.listen(port,() => {
    console.log("Servidor express en localhost 3000");
})


