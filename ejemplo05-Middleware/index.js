const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//Configuracion de SQLITE y creacion de la tabla
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
    db.run('CREATE TABLE usuarios(id INTEGER PRIMARY KEY,nombre TEXT,email TEXT)');
})


//Middleware para analizar cuerpos de solicitudes JSON
app.use(bodyParser.json());

//EndPoint para crear un nuevo usuario
app.post('/usuarios', (req, res) => {
    const { nombre, email } = req.body;
    db.run('INSERT INTO usuarios (nombre,email) VALUES(?,?)', [nombre, email],
        function (err) {
            if (err) {
                console.error(err);
                res.status(500).json({ mensaje: 'Error al crear el usuario' });
            } else {
                res.status(201).json({ id: this.lastID, nombre, email })
            }

        });
});

//EndPoint para Traer la informacion
app.get('/usuarios', (req, res) => {
    db.all('Select * From Usuarios', (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).json({ mensaje: 'Error al obtener usuarios' })
        } else {
            res.json(rows);
        }
    });
});

//EndPoint para obtener un usuario por ID
app.get('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    db.get('SELECT * FROM Usuarios WHERE id = ?', [userId], (err, row) => {
        if (err) {
            console.error(err);
            res.status(500).json({ mensaje: 'Error al obtener el usuario' });
        } else if (row) {
            res.json(row);
        } else {
            res.status(404).json({ mensaje: 'Usuario No encontrado' })
        }
    });
});

//Endpoint para eliminar un usuario por id
app.delete('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    db.run('DELETE FROM usuarios WHERE id =?', [userId], function (err) {
        if (err) {
            console.error(err);
            res.status(500).json({ mensaje: 'Error al Eliminar usuario' });
        } else if (this.changes > 0) {
            res.json({ mensaje: 'Usuario eliminado' });
        } else {
            res.status(404).json({ mensaje: 'usuario no encontrado' });
        }
    });

});

//Endpoint para actualizar un usuario por ID
app.put('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    const { nombre, email } = req.body;
    db.run('UPDATE usuarios SET nombre= ? , email =? WHERE id=?', [nombre, email, userId], function (err) {
        if (err) {
            console.error(err);
            res.status(500).json({ mensaje: "Error al actualizar usuario" })
        } else if (this.changes > 0) {
            res.json({ mensaje: 'usario actualizado con exito' })
        } else {
            res.status(404).json({ mensaje: 'usuario no encontrado' })
        }
    });
});



//Iniciar el servidor
app.listen(PORT, () => {
    console.log("Microservicio escuchando en el localhost:3000");
});


