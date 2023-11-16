//Caracteristica de  ECMAScript Modules
import { DataTypes } from "sequelize";
import sequelize from "../sequelize";



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