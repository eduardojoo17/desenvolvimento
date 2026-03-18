import express from "express"

const api = express()
const porta = 3000
const pessoas = [
    {
        id:1,
        nome:"eduardo",
        idade:28,
        area: "ti - software"
    },
    {
        id:2,
        nome:"paulo",
        idade:30,
        area: "mecanica"
    }
]

api.use(express.json())

api.get("/pessoas",(req,res)=>{
    res.json(pessoas)
})

api.post('/pessoas',(req,res)=> {
    const pessoa = req.body

    api.get("/pessoas/:id",(req,res) => {
        const id= req.params.id

        res.json(pessoas.filter((pessoa)=>{
            return pessoa.id ==id
        }))
       
                 
    })

    if(pessoa.nome==null||pessoa.idade == null||pessoa.area==null) {
        return res.json({
            mensagem: "Error,informação faltando."
        })
    }

    pessoas.push(pessoa)
    res.json({
        mensagem: "ok. pessoa adicionada na lista"
        
    })
})






api.listen(porta, ()=>{
    console.log(`servidor está rodando http://localhost:${porta}`)
})