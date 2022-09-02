const cliente = {
    nome: "veronica",
    idade: 28,
    cpf: "277.869.780-20",
    email: "veronica@veronica.com"
}

const chaves = ["nome", "idade", "cpf", "email"]
//notação de colchetes, para utilizar variável ou posição no array para acessar
console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]));

console.log(cliente["nome"])
// não dá erro ao acessar uma chave não existente, tomar CUIDADO validação necessária: chave undefined ? erro : prossiga
console.log(cliente["cu"])