import { ClientRequest } from "node:http";
import { pool } from "../db.js";

export interface IItemPedido {
  id: number;
  pedido_id: number;
  produto_id: number;
  quantidade: number;
  preco_un: number;
}

export interface IPedido {
  id: number;
  data_criacao: Date;
  status: string;
  itens: IItemPedido[];
}

export type INovoItemPedido = Pick<IItemPedido, "produto_id" | "quantidade">;

export const PedidoModel = {
  async criar(itens: INovoItemPedido[]): Promise<{ id: number }> {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const pedido = await client.query(
        "INSERT INTO pedidos (status) VALUES ('pendente') RETURNING id"
      );
      const pedidoID = pedido.rows[0].id;
      for (const item of itens) {
        const produtoSelecionado = await client.query(
          "SELECT estoque ,nome FROM produtos WHERE id = $1",
          [item.produto_id]
        );
        if (
          !produtoSelecionado.rows[0] ||
          produtoSelecionado.rows[0].estoque < item.quantidade
        ) {
          throw new Error(
            `estoque insuficiente para o produto: ${produtoSelecionado.rows[0].nome}!`
          );
        }
        await client.query(
          "Update produtos SET estoque = estoque - $1 WHERe id = $2",
          [item.quantidade, item.produto_id]
        );
        await client.query(
          "INSERT INTO itens_pedido(pedido_id, produto_id, quantidade) VALUES ($1,$2,$3)",
          [pedidoID, item.produto_id, item.quantidade]
        );
      }
      await client.query("COMMIT");
      return { id: pedidoID };
    } catch (error) {
      await client.query("ROLLBACK");

      throw error;
    } finally {
      client.release();
    }
  },
};
