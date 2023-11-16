import { Sequelize } from "sequelize";

const sequelize = new Sequelize("bd","user","pwd", {
    host:"host",
    dialect:"mysql"
});

export default sequelize;