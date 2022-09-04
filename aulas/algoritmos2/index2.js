const {edGalho, edFolha} = require('./array2');
const listaLivros = require('./array3');

function mergeSort(array){
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordena(parte1, parte2)
    }
    return array
}

function  ordena(parte1, parte2){
    let posAtual1 = 0;
    let posAtual2 = 0;
    const resultado = [];

    while (posAtual1 < parte1.length && posAtual2 < parte2.length) {
        let produtoAtual1 = parte1[posAtual1];
        let produtoAtual2 = parte2[posAtual2];
        if (produtoAtual1.preco < produtoAtual2.preco) {
            resultado.push(produtoAtual1);
            posAtual1++
        } else {
            resultado.push(produtoAtual2);
            posAtual2++
        }
    }

    return resultado.concat(posAtual1 < parte1.length ? parte1.slice(posAtual1) : parte2.slice(posAtual2))
}

console.log(mergeSort(listaLivros));