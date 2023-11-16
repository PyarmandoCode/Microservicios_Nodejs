import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";
import Author from "./authorModels.js"

const Books = sequelize.define("Books" , {
    idbook : {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    titulo : {
        type:DataTypes.STRING,
        allowNull:false,
    },
    idautor: {
        type :DataTypes.INTEGER,
        allowNull:false,
    }

});

//Un Libro Pertenece aun author
Books.belongsTo(Author , {
    foreignKey:"idautor"
});

//Un Author tiene muchos libros
Author.hasMany(Libro , {
    foreignKey:idautor
});



export default Books;