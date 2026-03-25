import {usuarios} from "../data/usuarios.js"

export function listarUsuarios(req,res){
    res.json(usuarios)
}

export function criarUsuario(req,res){
    const usuario = req.body;

    if(usuario.usuario == null||usuario.ativo == null ){
       return res.json( {mensagem: "campo incompleto"})
    }

    const novoUsuario = {
    id: usuarios.length+1,
    usuario: usuario.usuario,
    ativo: usuario.ativo}

    usuarios.push(novoUsuario);

    res.json({mensagem: "usuario adicionado"})
    
}

export function buscarID(req, res) {
    const id = Number(req.params.id)
    const usuario = usuarios.find((usuario) => usuario.id === id)
  
    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado" })
    }
  
    res.json(usuario)
  }



export function deletarUsuario(req, res) {
    const id = Number(req.params.id)
    const index = usuarios.findIndex((usuario) => usuario.id === id)
  
    if (index === -1) {
        return res.status(404).json({ erro: "Usuário não encontrado" })
      }
      usuarios.splice(index, 1)
  
    res.json({mensagem:"usuario deletado"})
  }

  export function atualizarUsuario(req, res) {
    const id = Number(req.params.id)
    const usuario = usuarios.find((u) => u.id === id)
    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" })
      }

      const { usuario: nomeUsuario, ativo } = req.body
      if (nomeUsuario !== undefined) usuario.usuario = nomeUsuario
      if (ativo !== undefined) usuario.ativo = ativo
      res.json(usuario)
}