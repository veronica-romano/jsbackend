const livros = require ('./livros');
const menorValor = require ('./menorvalor');

for (let atual = 0; atual < livros.length - 1; atual++) {
    let menor = menorValor(livros, atual);
    let livroAtual = livros[atual];
    console.log(`atual:`, livros[atual])
    let livroBarato = livros[menor];
    console.log(`menor:`, livros[menor])
    livros[atual] = livroBarato;
    livros[menor] = livroAtual;
}

console.log(livros)


