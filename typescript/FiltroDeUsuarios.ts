interface user{
    id:number
    nome:string
    email:string
}

const usuarios:user[]=[
{
    id:1,
    nome:"Paulo",
    email: "paulo@email"
},
{
    id:2,
    nome:"Marcos",
    email: "marco@email"
},
{
    id:3,
    nome:"Eduardo",
    email: "Eduardo@email"
}
]





function esc(usuarios: user[]): string[] {
  // O map percorre o array e para cada 'u' (usuario), ele extrai o nome
  return usuarios.map((u) => {
    return u.nome; 
  });
}


console.log(esc(usuarios));