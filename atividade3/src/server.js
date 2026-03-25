import express from "express"
import rotasUsuario from "./routes/usuarios.routes.js"
import rotasLivros from "./routes/livros.routes.js"

const api = express()
const porta = 3000

api.use(express.json())
api.use(rotasUsuario)
api.use(rotasLivros)


api.listen(porta,() => {
    console.log("Servidor rodando em http://localhost:"+porta)
})