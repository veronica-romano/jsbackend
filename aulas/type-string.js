const texto1 = "lorem ipsum sit amet";
const texto2 = 'lorem ipsum sit amet';
const senha = "senhasegurapacas123";
const stringDeNumeros = "123";
const citacao = 'ela disse "oi".'
const nome = 'Veronica.';
console.log(citacao);
//template string
console.log(`já sei usar template string. Inclusive, ${citacao}`);
//concatenação
console.log(nome+', '+citacao);
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)



const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false


const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


console.log(`Sua senha tem ${senha.length} caracteres`) // 13 caracteres