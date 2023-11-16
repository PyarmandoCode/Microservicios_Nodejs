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
    }
    
});

export default Author;