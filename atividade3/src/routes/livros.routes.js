import { Router } from "express";

import { criarLivro, listarlivros } from "../controllers/livros.controller.js";


const router = Router();

router.get("/livros", listarlivros)
router.get("/livros", criarLivro)


export default router