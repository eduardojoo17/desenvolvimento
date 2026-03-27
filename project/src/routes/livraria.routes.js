import { Router } from "express";
import { reservar } from "../controllers/livraria.controller.js";

export const rotasLivraria = Router()

rotasLivraria.post("/reserva/:livroId/:buscarUsuarioPorId",reservar)

export default rotasLivraria;