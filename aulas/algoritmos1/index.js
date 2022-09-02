const livros = require ('./livros');

function menorValor(arrlivros, inicial){
  let barato = inicial;
  
  for (let atual = inicial; atual<arrlivros.length; atual++){
      if (arrlivros[atual].preco < arrlivros[barato].preco) {
        barato = atual  
      } 
    }
    return barato;
}

console.log(`O livro mais barato é o ${livros[barato].titulo} que custa ${livros[barato].preco} reais`)

let maisCaro = 0;
for (let atual = 0; atual < livros.length; atual++) {
 if (livros[atual].preco > livros[maisCaro].preco) {
   maisCaro = atual;
 }
}
console.log(`O livro mais caro é o ${livros[maisCaro].titulo} que custa ${livros[maisCaro].preco} reais`)


module.exports = menorValor;