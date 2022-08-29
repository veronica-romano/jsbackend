//tipos de dado

//booleanos
const numero = 456;
const numeroString = "456";
console.log(numero === numeroString);
console.log(numero == numeroString); //conversão implícita
/* 
= atribuir
== comparar valores
=== comparar valores e tipos */

const numeroString2 = "456";

const numeroString3 = Number("456");

const numeroString4 = Number("456a");

//conversão explícita
console.log(numero + Number(numeroString))

console.log(numero + numeroString2)

console.log(numero + numeroString3)

console.log(numero + numeroString4)
