import { Router } from "express";
import { 
    listarLivros,
    criarLivro,
    atualizarLivro,
    deletarLivro,
    emprestarLivro,
    devolverLivro
 } from "../controllers/livros.controller.js";

const router = Router();

router.get("/livros", listarLivros);
router.post("/livros", criarLivro);
router.put("/livros/:id", atualizarLivro);
router.delete("/livros/:id", deletarLivro);
router.patch("/livros/:idLivro/emprestar", emprestarLivro);
router.patch("/livros/:idLivro/devolver", devolverLivro);

export default router;