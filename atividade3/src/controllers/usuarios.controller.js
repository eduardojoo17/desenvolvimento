import {usuarios} from "../data/usuarios.js"

export function listarUsuarios(req,res){
    res.json(usuarios)
}

