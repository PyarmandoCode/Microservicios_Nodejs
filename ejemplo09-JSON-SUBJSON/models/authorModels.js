//Caracteristica de  ECMAScript Modules
import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";



const Author = sequelize.define("Author" ,{
    idautor: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombreautor: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    correoElectronico: {
        type: Sequelize.STRING, // Tipo de datos del campo (puede variar)
        allowNull: true // Opcional: indica si el campo puede ser nulo o no
      }
});

export default Author;