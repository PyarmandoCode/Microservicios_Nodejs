const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Definir mis rutas

router.get('/users',userController.getAllUsers);
router.post('/users',userController.createUser);

//Definir otras rutas

module.exports = router;
