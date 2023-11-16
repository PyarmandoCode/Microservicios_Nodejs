import Author from '../models/authorModels.js';
import Books from '../models/booksModels.js';

module.exports = {
    Author_Books: async (req, res) => {
        try {
            const author_books = await Author.findAll({ include: Books });
            res.json(author_books);

        } catch (error) {
            console.error(error);
            res.status(500).send("Error en el Server");
        }
    },
    createauthor: async (req, res) => {
        const { idautor, nombreautor } = req.body;
        try {
            const author = await Author.create({ idautor, nombreautor });
            res.json(author);

        } catch (error) {
            console.error(error);
            res.status(500).send("Error en el Server");

        }
    }
}

// export const Author_Books = async (req,res) => {
//     const author_books = await Author.findAll({include:Books});
//     res.status(200).json(author_books);

