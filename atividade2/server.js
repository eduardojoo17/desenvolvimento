import express from "express"

const porta = 3000
const api = express()
const produtos = []

api.use(express.json())

api.get("/produtos",(req,res) =>{
    res.json(produtos)
})

api.get("/produtos", (req, res)=>{
    const filtros = req.query
    let resposta = produtos

    if (filtros.nome) {
        resposta=resposta.filter((produto) =>{
            return produto.nome.toLowerCase().includes(filtros.nome.toLowerCase())
        })
    }

    if (filtros.categoria) {
        resposta=resposta.filter((produto) =>{
            return produto.categoria.toLowerCase().includes(filtros.categoria.toLowerCase())
    })
    }
    res.json(resposta)
})

api.post("/produtos", (req, res)=>{
    const produto = req.body

    if (produto.id == null || produto.nome == null|| produto.preco == null || produto.categoria == null) {
        return res.json({
            mensagem: "Error, informação faltando."
        })
    }

    produtos.push(produto)
    res.json({
        mensagem: "OK. produto adicionado na lista."
    })
})


api.get("/produtos/:id", (req, res)=>{
    const id = req.params.id

    res.json(produtos.filter((produto)=>{
        return produto.id == id
    }))
})

api.listen(porta, ()=>{
    console.log(`Servidor está rodando http://localhost:${porta}`)
})

