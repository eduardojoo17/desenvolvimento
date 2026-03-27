import {livros} from "../data/livros.js"

export function reservar(req,res){
    const idlivro = req.params.livroId
    const idUsuario = req.params.usuarioId

    const livro = livros.find(livro => livro.id == idlivro)
    if (!livro) return res.status(404).json({
        messagem: "Livro não encontrado"
    })

    if (livro.usuarioId != null) return res.status(400).json({
        messagem: "Livro já reservado, volte outra hora."
    })     

    livro.usuarioId = idUsuario

    res.status(200).json({
        messagem: `Reserva concluida do livro ${livro.titulo} para o usuario ${idUsuario}`
    })
    
}