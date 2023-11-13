/*Importar la libreria de express */
const express = require('express');
const PORT=3000;

/*Creando la Aplicacion de express */
const app = express()


/*Creando las rutas = ENDPOINT */
app.get('/', (req, res) => {
    res.send("!Hola, Este es un MicroServicio");
});

/*Exponer el puerto de mi Micro-Servicio*/
app.listen(PORT,() =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})




