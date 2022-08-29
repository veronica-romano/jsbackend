const primeiroNumero = 5;
const segundoNumero = 55;

console.log(primeiroNumero === segundoNumero);
console.log(primeiroNumero == segundoNumero);
console.log(primeiroNumero != segundoNumero);

const texto1 = "Alura"
const texto2 = "alura"
console.log(texto1 === texto2);
console.log(texto1 == texto2);

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR);

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input1 = null;
let input2;

console.log(input1); // null
console.log(input2); // undefined


console.log(null == undefined); // true
console.log(null === undefined); // false


const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;


console.log(operacao);