const express = require('express');
const app = express();

const port = 3000;

//Middleware para  manejar datos en Json
app.use(express.json())

//Datos de Ejemplo luego reemplazaremos por BD

const authors = [
    { id: 1, name: 'Author1' },
    { id: 2, name: 'Author2' },
];

const books = [
    { id: 1, title: 'Book1', authorid: 1 },
    { id: 2, title: 'Book2', authorid: 1 },
    { id: 3, title: 'Book3', authorid: 2 },
    { id: 4, title: 'Book4', authorid: 2 },
    { id: 5, title: 'Book5', authorid: 2 },
    { id: 6, title: 'Book6', authorid: 2 },
    { id: 7, title: 'Book7', authorid: 1 },
]

//Obtener todos los datos de los autores
app.get('/authors', (req, res) => {
    res.json(authors);
})

//Obtener libros por autor
//http://localhost:3000/author/1/books
app.get('/author/:authorId/books', (req, res) => {
    const authorId = parseInt(req.params.authorId);
    const authorBooks = books.filter(book => book.authorid === authorId)
    res.json(authorBooks);
})

app.listen(port,() => {
    console.log("Servidor Iniciado en localhost:3000")
})


