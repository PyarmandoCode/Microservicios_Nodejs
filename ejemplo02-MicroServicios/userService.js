const express = require('express')
const app = express();
const port = 3001;

app.use(express.json());

const users = [
    { id: 1, name: 'bob' },
    { id: 2, name: 'flex' },
    { id: 3, name: 'marylin' },

];

app.get('/users', (req, res) => {
    res.json(users);
})

app.listen(port, () => {
    console.log(`servicio de usuario en http://localhost:${port}`)
});