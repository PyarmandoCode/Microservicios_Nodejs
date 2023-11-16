const UserModel = require('../models/UserModels');

const UserController = {
    async getUsers(req, res) {
        try {
            const users = await UserModel.getUsers();
            res.json(users)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },
    async createUser(req, res) {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: 'Nombre y Correo Son Mandatorios' });

        }
        const user = { name, email };
        try {
            await UserModel.saveUser(user);
            res.status(201).json({ message: 'Usuario Creado exitosamente' })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },
};

module.exports=UserController;