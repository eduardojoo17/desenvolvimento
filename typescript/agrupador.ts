interface prod {
    categoria:string,
    quantidade:number
}

const produto:prod []=[
{categoria:"camisa",quantidade:20},{categoria:"calça",quantidade:25},{categoria:"moleton",quantidade:10}]




function agrup(produto: prod[]): any {
    return produto.reduce((acc, item) => {
        //  Se a categoria já existe no nosso objeto acumulador (acc)
        if (acc[item.categoria]) {
            acc[item.categoria] += item.quantidade; // Soma o que já tem
        } else {
            // 2. Se não existe, cria ela com a quantidade atual
            acc[item.categoria] = item.quantidade;
        }

        return acc; // Devolve o objeto para a próxima volta
    }, {}as Record<string, number>); // Começa com um objeto vazio {}
}
console.log(produto)
console.log(agrup(produto));