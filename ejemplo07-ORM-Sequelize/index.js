const express = require('express');
const sequelize = require('./sequelize');
const userRoutes=require('./routes/userRoutes');

const app = express();
const PORT =3000;

app.use(express.json());

app.use('/users/',userRoutes);


//Sincronizacion del ORM con BD
sequelize.sync().then(()=> {
    app.listen(PORT,() => {
        console.log("Servidor en escucha en el puerto 3000")
    })
})