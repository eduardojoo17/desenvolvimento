import { Router } from "express"

import { 
    listarUsuarios, 
    criarUsuario, 
    buscarUsuarioPorId, 
    deletarUsuario, 
    atualizarUsuario 
} from "../controllers/usuarios.controller.js"

const router = Router()

router.get("/usuarios", listarUsuarios)           // Listar todos
router.get("/usuarios/:id", buscarUsuarioPorId)   // Buscar um específico
router.post("/usuarios", criarUsuario)            // Criar novo
router.put("/usuarios/:id", atualizarUsuario)     // Atualizar
router.delete("/usuarios/:id", deletarUsuario)    // Deletar

/*
// rota de teste
router.get("/usuarios", (req, res) => {
    res.json({ mensagem: "Rota de usuários funcionando!" })
})
*/

export default router
