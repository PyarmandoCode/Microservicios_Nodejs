const { Sequelize, DataTypes } = require('sequelize');


// const sequelize = new Sequelize ({
//     dialect:'sqlite',
//     storage:'database.sqlite'
// });

// module.exports = sequelize;

// const sequelize = new Sequelize('bdusers', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql' 
// });
const sequelize = new Sequelize('bdusers', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;