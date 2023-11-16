import Router from "express";
import { Author_Books ,CreateAuthor}  from "../controllers/authorController.js";
import { CreateBooks } from "../controllers/booksController.js";

const router = Router();

router.get("/authoresbooks",Author_Books);
router.post("/createauthor" ,CreateAuthor);
router.post("/createbooks" ,CreateBooks)


export default router;