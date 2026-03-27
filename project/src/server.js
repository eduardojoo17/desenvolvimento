import express from "express"
import rotasUsuario from "./routes/usuarios.routes.js";
import rotasLivros from "./routes/livros.routes.js";
import rotasLivraria from "./routes/livraria.routes.js"
import { db } from "./database.js";




 
const api = express()

api.use(express.json())
api.use(rotasUsuario)
api.use(rotasLivros)
api.use(rotasLivraria)

api.use("/pessoas",async function(req,res){
    const resultado = await db.query("SELECT  * from pessoas;")
    
    res.status(200).json(resultado.rows)
})

api.post("/pessoas",async function (req,res) {
    const dados = req.body

    const resultado = await db.query("INSERT INTO pessoas (nome) values($1) returning *;",[dados.nome])

    console.log(resultado)

    res.status(200).json({
        messagem:"pessoa criada"
    })
})


api.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})