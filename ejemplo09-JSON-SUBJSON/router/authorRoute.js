import Router from "express";
import {Author_Books } from "../controllers/authorController.js";


const router = Router();

router.get("/authoresbooks",Author_Books);
//router.post("/createauthor" ,CreateAuthor)


export default router;