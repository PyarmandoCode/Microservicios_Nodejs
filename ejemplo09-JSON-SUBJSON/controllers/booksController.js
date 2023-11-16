import Books from '../models/booksModels.js';

export const CreateBooks = async (req, res) => {
    const { titulo ,idautor } = req.body;
    try {
        const book = await Books.create({ titulo ,idautor });
        res.json(book);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el Server");

    }
};