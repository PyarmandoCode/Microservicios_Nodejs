//Crear un conjunto de conexion
import { createPool } from "mysql2/promise";

export const pool = createPool({
    host:'localhost',
    user:'root',
    password:'Rioazulq12',
    port:3306,
    database:'empresadb'
})