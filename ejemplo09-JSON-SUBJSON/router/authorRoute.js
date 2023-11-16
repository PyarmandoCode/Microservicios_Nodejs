import Router from "express";
import {Author_Books} from "../controllers/authorController.js";

const router = Router();

router.get("/authoresbooks",Author_Books);


export default router;