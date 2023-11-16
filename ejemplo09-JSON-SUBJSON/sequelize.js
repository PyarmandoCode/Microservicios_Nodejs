import { Sequelize } from "sequelize";

const sequelize = new Sequelize("bdautor_books","root","Rioazulq12", {
    host:"localhost",
    dialect:"mysql"
});

export default sequelize;