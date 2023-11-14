const User=require('../models/userModel');

const users = []; //Almacenamiento en memoria

//Logica para agregar un nuevo usuario utilizando
//El Objeto User
const createUser = (req,res) =>{
    const {name,email,edad} =req.body;
    const newUser = new User(User.length+1,name,email,edad);
    users.push(newUser);
    res.status(201).json(newUser);
};

//Metodo para Traer los usuarios utilizando el modelo
const getAllUsers = (req,res) =>{
    res.json(users);
};

//Otros controladores para actualizar y eliminar

module.exports = {
    getAllUsers,
    createUser
    //Otros controladores exportados aqui
};