import express from "express"
import employeeRoutes from './routes/employees.router.js'



const app = express()
//Middleware JSON
app.use(express.json())

app.use('/api', employeeRoutes);


app.listen(3000)
console.log("se esta ejecutando el servidor localhost 3000")




//MicroServicio FULL
// app.get('/empleados', (req, res) => res.send('Obteniendo empleados'));
// app.post('/empleados', (req, res) => res.send('Creando empleados'));
// app.put('/empleados', (req, res) => res.send('Actualizando empleados'));
// app.delete('/empleados', (req, res) => res.send('Eliminando empleados'));

//Probando la conexion de Mysql
// app.get('/ping', async (req, res) => {
//     const [result] = await pool.query('select 1 +1 as result');
//     res.json(result);
// })


