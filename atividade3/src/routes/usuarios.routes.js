import {Router } from "express"
import {atualizarUsuario, buscarID, criarUsuario, deletarUsuario, listarUsuarios } from "../controllers/usuarios.controller.js"

const router = Router()

router.get("/usuarios", listarUsuarios)

router.post("/usuarios", criarUsuario)

router.get("/usuarios/:id",buscarID)

router.delete("/usuarios/:id",deletarUsuario)

router.put("/usuarios/:id", atualizarUsuario)

export default router
