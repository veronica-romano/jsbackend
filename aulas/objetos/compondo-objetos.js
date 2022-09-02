const cliente = {
    nome: "veronica",
    idade: 28,
    cpf: "277.869.780-20",
    email: "veronica@veronica.com",
    tel: ["(89) 3544-3166", "(63) 2491-7852" ]
}

cliente.dependentes = {
    nome: "Mavis",
    parentesco: "filha",
    dataNasc: "18/09/2017"
}

console.log(cliente)

cliente.dependentes.nome = "Peinvis"

console.log(cliente)