import express from 'express';

const aplicacao = express()

function hello(req,res){
    res.send("Olá, mundo")
}
aplicacao.get('/hello',hello)

function inicio(){
    console.log('servidor está rodando ...')
}
aplicacao.listen(3000,inicio)