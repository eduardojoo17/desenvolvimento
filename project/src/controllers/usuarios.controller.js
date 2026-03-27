import { usuarios } from "../data/usuarios.js";

// Listar todos
export const listarUsuarios = (req, res) => {
    res.json(usuarios); 
};

// Criar Usuário (POST)
export function criarUsuario(req, res) {
    const { usuario, ativo } = req.body;

    if (!usuario) {
        return res.status(400).json({ mensagem: "O campo usuário é obrigatório!" });
    }

    const novoUsuario = {
        id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
        usuario: usuario,
        ativo: ativo ?? true
    };

    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
}

// Buscar por ID (GET/:id)
export function buscarUsuarioPorId(req, res) {
    const { id } = req.params;
    const usuarioEncontrado = usuarios.find(u => u.id === Number(id));

    if (!usuarioEncontrado) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    res.json(usuarioEncontrado);
}

// Deletar por ID (DELETE/:id)
export function deletarUsuario(req, res) {
    const { id } = req.params;
    const index = usuarios.findIndex(u => u.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ mensagem: "Usuário não encontrado para deletar" });
    }

    usuarios.splice(index, 1);
    res.json({ mensagem: "Usuário deletado com sucesso!" });
}

// Atualizar por ID (PUT/:id)
export function atualizarUsuario(req, res) {
    const { id } = req.params;
    const { usuario, ativo } = req.body;
    const usuarioExistente = usuarios.find(u => u.id === Number(id));

    if (!usuarioExistente) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    if (usuario) usuarioExistente.usuario = usuario;
    if (ativo !== undefined) usuarioExistente.ativo = ativo;

    res.json(usuarioExistente);
}