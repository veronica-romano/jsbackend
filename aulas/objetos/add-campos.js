const cliente = {
    nome: "veronica",
    idade: 28,
    cpf: "277.869.780-20",
    email: "veronica@veronica.com"
}
console.log(cliente.fone); //undefined
console.log(cliente); //cliente sem fone
cliente.fone="977370011";
console.log(cliente);// cliente com fone
cliente.fone="00000000"; 
console.log(cliente); // cliente com fone 00000000