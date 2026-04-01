interface produto{
    valor: number ,
    categoria:string
}

const camisa: produto = {
  valor:20,
  categoria:"vestuario"
}
const celular: produto={
  valor:1000,
  categoria:"eletronico"
}

function calcularDesconto(item: produto): number {
  
  if (item.categoria === "eletronico") {
    return item.valor - (item.valor * 0.1);
  }
  if (item.categoria === "vestuario") {
    return item.valor - (item.valor * 0.05);
  }
  return item.valor;
}


console.log ("o valor final da camisa é: ",calcularDesconto(camisa))
console.log ("o valor final da celular é: ",calcularDesconto(celular))