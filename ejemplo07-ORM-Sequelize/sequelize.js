const { Sequelize, DataTypes } = require('sequelize');


// const sequelize = new Sequelize ({
//     dialect:'sqlite',
//     storage:'database.sqlite'
// });

//npm i mysql2
// module.exports = sequelize;

// const sequelize = new Sequelize('bdusers', 'root', 'Rioazulq12', {
//     host: 'localhost',
//     dialect: 'mysql' 
// });

//npm i pg
const sequelize = new Sequelize('bdusers2', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;