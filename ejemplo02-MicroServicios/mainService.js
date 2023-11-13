const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/main', async (req, res) => {
    try {
        const usersResponse = await axios.get('http://localhost:3001/users');
        const productsResponse = await axios.get('http://localhost:3002/products')

        const result = {
            users: usersResponse.data,
            products: productsResponse.data
        };
        res.json(result); //respuesta del Servicio
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

})

app.listen(port, () => {
    console.log(`servicio de usuario en http://localhost:${port}`)
})

