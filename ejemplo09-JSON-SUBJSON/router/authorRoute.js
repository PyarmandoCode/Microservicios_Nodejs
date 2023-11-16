import Router from "express";
import { Author_Books ,CreateAuthor,CreateBooks}  from "../controllers/authorController.js";


const router = Router();

router.get("/authoresbooks",Author_Books);
router.post("/createauthor" ,CreateAuthor);
router.post("/createbooks" ,CreateBooks)


export default router;