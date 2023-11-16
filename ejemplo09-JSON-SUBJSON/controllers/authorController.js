import Author from '../models/authorModels.js';
import Books from '../models/booksModels.js';

export const Author_Books = async (req,res) => {
    const author_books = await Author.findAll({include:Books});
    res.status(200).json(author_books);
};