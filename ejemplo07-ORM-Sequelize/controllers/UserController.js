const User = require('../models/userModels');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).send("Error en el Server");
        }
    },
    createUser: async (req, res) => {
        const { username, email } = req.body;
        try {
            const user = await User.create({ username, email });
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).send("Error en el Server");
        }
    },
}