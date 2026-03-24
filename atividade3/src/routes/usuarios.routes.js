import {Router } from "express"
import { listarUsuarios } from "../controllers/usuarios.controller.js"

const router = Router()

router.get("/usuarios", listarUsuarios)

export default router
