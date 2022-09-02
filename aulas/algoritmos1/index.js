const livros = require ('./livros')
let atual = 0;
let barato = 0;

for (let atual = 0; atual<livros.length; atual++){
    if (livros[atual].preco < livros[barato].preco) {
      barato = atual  
    } 
}

console.log(`O livro mais barato é o ${livros[barato].titulo} que custa ${livros[barato].preco} reais`)

let maisCaro = 0;
for (let atual = 0; atual < livros.length; atual++) {
 if (livros[atual].preco > livros[maisCaro].preco) {
   maisCaro = atual;
 }
}
console.log(`O livro mais caro é o ${livros[maisCaro].titulo} que custa ${livros[maisCaro].preco} reais`)