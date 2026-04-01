import { pool } from "../db.js";

export interface IProduto{
    id?: number;  // interrogação pode ser undefined
    nome: string;
    preco: number;
    estoque: number;
}

export const ProdutoModel = {
    async listarTodos(): Promise<IProduto[]>{
        const {rows} = await pool.query("SELECT * FROM produtos");
        return rows
    },
    async criar(dados:IProduto):Promise<IProduto[]>{
        const query= "INSERT INTO produtos (nome,preco,estoque) values ($1,$2,$3)returning *";
        const values = [dados.nome,dados.preco,dados.estoque];
        const result = await pool.query(query,values);
        return result.rows[0]
    }
  
}

