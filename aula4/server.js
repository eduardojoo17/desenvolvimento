import express from "express"

const porta = 3000
const api = express()
const pessoas = [
    {
        id: 1,
        nome: "eduardo",
        idade: 28,
        area: "ti - software"
    },
    {
        id: 2,
        nome: "Fred",
        idade: 25,
        area: "mecanica"
    }
]

api.use(express.json())

api.get("/pessoas", (req, res)=>{
    const filtros = req.query
    let resposta = pessoas

    if (filtros.nome) {
        resposta=resposta.filter((pessoa) =>{
            return pessoa.nome.toLowerCase().includes(filtros.nome.toLowerCase())
        })
    }

    if (filtros.area) {
        resposta=resposta.filter((pessoa) =>{
            return pessoa.area.toLowerCase().includes(filtros.area.toLowerCase())
    })
    }
    res.json(resposta)
})

api.get("/pessoas/:id", (req, res)=>{
    const id = req.params.id

    res.json(pessoas.filter((pessoa)=>{
        return pessoa.id == id
    }))
})

api.post("/pessoas", (req, res)=>{
    const pessoa = req.body

    if (pessoa.idade == null || pessoa.area == null || pessoa.nome == null) {
        return res.json({
            mensagem: "Error, informação faltando."
        })
    }

    pessoas.push(pessoa)
    res.json({
        mensagem: "OK. Pessoa adicionada na lista."
    })
})

api.listen(porta, ()=>{
    console.log(`Servidor está rodando http://localhost:${porta}`)
})