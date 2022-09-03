const livros = require('./livros');

function insertionSort(lista){
    for (let atual = 0; atual < lista.length; atual++) {
       let analise = atual;
       while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {

    
        let livroAnalise = lista[analise];
        let livroAnterior = lista[analise -1];
        lista[analise] = livroAnterior;
        livros[analise -1] = livroAnalise;

        analise--
       }
    }
    console.log(lista);
}
insertionSort(livros);

function insertionSortNome(lista){
    for (let atual = 0; atual < lista.length; atual++) {
       let analise = atual;
       while (analise > 0 && lista[analise].titulo < lista[analise - 1].titulo) {

    
        let livroAnalise = lista[analise];
        let livroAnterior = lista[analise -1];
        lista[analise] = livroAnterior;
        livros[analise -1] = livroAnalise;

        analise--
       }
    }
    console.log(lista);
}
insertionSortNome(livros);