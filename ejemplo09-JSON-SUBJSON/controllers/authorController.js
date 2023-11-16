import Author from '../models/authorModels.js';
import Books from '../models/booksModels.js';

export const Author_Books = async (req, res) => {
    try {
        const author_books = await Author.findAll({ include: Books });
        res.json(author_books);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el Server");
    }

};

export const CreateAuthor = async (req, res) => {
    const { nombreautor } = req.body;
    try {
        const author = await Author.create({ nombreautor });
        res.json(author);

    } catch (error) {
        console.error(error);
        res.status(500).send(error);

    }
};




