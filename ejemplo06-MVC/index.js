const express=require('express');
const useRoutes = require('./routes/userRoute');

const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

//Rutas
app.use('/api/',useRoutes);

//Iniciar el Servidor

app.listen(PORT,() =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});
