import { livros } from "../data/livros.js";
import { usuarios } from "../data/usuarios.js";

// Listar todos os livros
export function listarLivros(req, res) {
    res.json(livros);
}

// Criar um novo livro
export function criarLivro(req, res) {
    const { titulo } = req.body;
    if (!titulo) return res.status(400).json({ erro: "Título é obrigatório" });

    const novoLivro = {
        id: livros.length > 0 ? livros[livros.length - 1].id + 1 : 1,
        titulo,
        usuarioId: null
    };
    livros.push(novoLivro);
    res.status(201).json(novoLivro);
}

// Atualizar um livro
export function atualizarLivro(req, res) {
    const { id } = req.params;
    const { titulo } = req.body;
    const livro = livros.find(l => l.id === Number(id));

    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });
    if (titulo) livro.titulo = titulo;

    res.json(livro);
}

// Deletar um livro
export function deletarLivro(req, res) {
    const { id } = req.params;
    const index = livros.findIndex(l => l.id === Number(id));

    if (index === -1) return res.status(404).json({ erro: "Livro não encontrado" });

    livros.splice(index, 1);
    res.json({ mensagem: "Livro removido com sucesso" });
}

// Emprestar um livro para um usuário
export function emprestarLivro(req, res) {
    const { idLivro } = req.params;
    const { idUsuario } = req.body;


// 1. Verificar se o livro existe
const livro = livros.find(l => l.id === Number(idLivro));
if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });

// 2. Verificar se o usuário existe
const usuario = usuarios.find(u => u.id === Number(idUsuario));
if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });

// 3. Verificar se o livro já está com alguém
if (livro.usuarioId !== null) {
    return res.status(400).json({ erro: "Este livro já está emprestado" });
}

// 4. Vincular
livro.usuarioId = Number(idUsuario);
res.json({ mensagem: `Livro emprestado para ${usuario.usuario}`, livro });
}

//Devolver livro
export function devolverLivro(req, res) {
    const { idLivro } = req.params;

    const livro = livros.find(l => l.id === Number(idLivro));
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });

    // Voltamos o dono para null
    livro.usuarioId = null;
    res.json({ mensagem: "Livro devolvido com sucesso", livro });
}