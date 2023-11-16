import Author from '../models/authorModels';
import Books from '../models/booksModels';

export const Author_Books = async (req,res) => {
    const author_books = await Author.findAll({include:Books});
    res.status(200).json(author_books);
};