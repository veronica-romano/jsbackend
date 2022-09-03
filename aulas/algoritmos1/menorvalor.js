const livros = require ('./livros');

function menorValor(arrprodutos, posinicial){
  let barato = posinicial;
  for (let atual = posinicial; atual<arrprodutos.length; atual++){
      if (arrprodutos[atual].preco < arrprodutos[barato].preco) {
        barato = atual  
      } 
   }
    return barato;
}


let maisCaro = 0;
for (let atual = 0; atual < livros.length; atual++) {
 if (livros[atual].preco > livros[maisCaro].preco) {
   maisCaro = atual;
 }
}
console.log(`O livro mais caro é o ${livros[maisCaro].titulo} que custa ${livros[maisCaro].preco} reais`)


module.exports = menorValor;