const nome = "Veronica";
const idade = 2021 - 1994;
const cidade = "São Paulo";
const apresentacao = "Meu nome é " + nome + ", " + " tenho "+idade + " anos e eu sou de " + cidade;
console.log(apresentacao);

const apresentaTemplate = `Meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}`;
console.log(apresentaTemplate);