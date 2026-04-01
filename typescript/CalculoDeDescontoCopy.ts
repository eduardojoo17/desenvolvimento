const valor: number = 20
const valor1:number = 2000
const cat1: string="vestuario"
const cat2: string="eletronico"



function calcularDesconto(valor:number, categoria:string){
  
  if (categoria === "eletronico") {
    return valor - (valor * 0.1);
  }
  if (categoria === "vestuario") {
    return valor - (valor * 0.05);
  }
  
}


console.log ("o valor final da camisa é: ",calcularDesconto(valor,cat1))
console.log ("o valor final da celular é: ",calcularDesconto(valor1,cat2))