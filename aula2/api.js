import express from 'express';


const porta = 3000
const app = express()

app.get('/home',(req,res) => {
    res.json({
        menssagem: "Rota inicial",
        status:"funcionando"
     });
});

app.get("/pessoa/:nome/:idade", (req,res)=>{
    const idade = req.params.idade
    const x = req.query.x

    res.json({
        nome:req.params.nome,
        idade: idade,
        x: x
    })
})


app.listen(porta,()=>{
    console.log("o servidor está rodando em localhost: ",porta)
})