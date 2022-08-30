/* var altura = 5;
var compromento = 7;

area = altura*compromento;
console.log(area)
var area; */

/* let forma = 'retangulo'
let altura = 5;
let comprimento = 7;
let area;
if (forma === 'triangulo') {
    area = altura * comprimento;
} else{
    area = altura * (comprimento/2);
}
 */

const forma = "quadrado";
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else{
    area = (altura * comprimento)/2;
}

console.log(area)
    
let idade = 17;
var status1 = (idade >= 18) ? "adulto" : "menor de idade";

console.log(`Você é ${status1}`)