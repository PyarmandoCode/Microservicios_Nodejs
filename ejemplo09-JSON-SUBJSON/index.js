import  express  from "express";
import Router from './router/authorRoute.js'
import sequelize from "./sequelize.js";

const PORT= process.env.PORT || 3000;

const app = express();
app.use("/api",Router);

sequelize.sync().then (() => {
    app.listen(PORT ,() => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    })
})

