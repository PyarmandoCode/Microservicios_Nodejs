const express = require('express')
const app = express();
const userRoutes = require('./routes/UserRoutes')

app.use(express.json());
app.use('/api',userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT ,() =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});



