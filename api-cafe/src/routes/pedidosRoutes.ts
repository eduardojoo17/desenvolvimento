import { Router } from "express";
import { postPedido } from "../controllers/PedidoController.js";

const router = Router();

router.post("/", postPedido);

export const pedidosRoutes = router;
