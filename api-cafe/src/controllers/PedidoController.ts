import type { Request, Response } from "express";
import { PedidoModel, type INovoItemPedido } from "../models/Pedido.js";

export const postPedido = async (req: Request, res: Response) => {
  const itens: INovoItemPedido[] = req.body.itens;

  if (!itens || !Array.isArray(itens)) {
    return res.status(400).json({ error: "formato de itens invalido" });
  }

  try {
    const novoPedido = await PedidoModel.criar(itens);
    return res.status(201).json(novoPedido);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res
      .status(500)
      .json({ error: "erro inesperado ao processar o pedido" });
  }
};
