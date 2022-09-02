/* JSON é um formato criado para transferência de dados, sendo assim é necessário convertê-lo para um objeto JavaScript para que os dados possam ser utilizados em um programa. Para isso, existem dois métodos nativos:

JSON.parse(): converte JSON para um objeto JavaScript;
JSON.stringify(): converte um objeto JavaScript para o formato JSON. */
const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
   console.log(jsonLivro)

   //processo inverso:

   const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)