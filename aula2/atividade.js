import express from 'express';


const porta = 3000
const app = express()

app.get('/produto/:id',(req,res) =>{
    const id = req.params.id;
    const nome = `Produto ${id}`;
    const preco = id*10;
    

    res.json({
        id:id,
        nome:nome,
        preco:preco
    })

})

app.listen(porta)//