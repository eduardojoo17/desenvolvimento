import { livros } from "../data/livros.js";
import { usuarios } from "../data/usuarios.js";

export function listarlivros(req,res){
    res.json(livros)
}

export function criarLivro(req,res){
    const livro = req.body

    if(livro.titulo== null){
        return res.json({mensagem:"campo de titulo obrigatorio"})
    }

    const novoLivro = {
        id:livros.length + 1,
        titulo:livro.titulo
    }

    usuarios.push(novoLivro)

    res.json({mensagem:"livro adicionado"})

}


export function atuLivro(req,res){
    const id = Number(req.params.id)
    const livro = livros.find((u) => u.id === id)

    if(!livro){
        return res.status(404).json({erro:"livro não encontrado"})
    }

    
}