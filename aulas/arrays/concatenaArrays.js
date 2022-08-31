const sala1 = ["Simmons",
"Michelle","Perry"];
const sala2 = [
"Frank","Butler",
"Shirley"]
// é preciso criar um outro array para salvar o concat
const sala3 = sala1.concat(sala2);
console.log(sala3);


const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat)
console.log(arrayOriginal)

/* Vimos anteriormente que, quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.
é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original. */