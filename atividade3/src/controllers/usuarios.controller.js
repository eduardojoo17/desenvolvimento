import {usuarios} from "../data/usuarios.js"

export function listarUsuarios(req,res){
    res.status(200).json(usuarios)
}

export function criarUsuario(req,res){
    const dados = req.body;

    if(!dados.usuario||!dados.ativo==undefined ){
       return res.status(400).json( {mensagem: "campo incompleto"})
    }

    const ultimoID = usuarios[usuarios.length -1].id
    const novoID = ultimoID?ultimoID + 1 :1
const novoUsuario={
    id: novoid,
    usuario: dados.usuario,
    ativo: dados.ativo}

    usuarios.push(novoUsuario);

    res.status(201).json({mensagem: "usuario adicionado",
      usuario: novoUsuario
    })
    
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