const {edGalho, edFolha} = require('./array1');
function juntaListas(lista1, lista2){
    let listaFinal = []
    let posAtualLista1 = 0;
    let posAtualLista2 = 0;
    let atual = 0;

    while (posAtualLista1 < lista1.length && posAtualLista2 < lista2.length) {
        let proAtualLista1 = lista1[posAtualLista1];
        let proAtualLista2 = lista2[posAtualLista2];
        if (proAtualLista1.preco < proAtualLista2.preco) {
            listaFinal[atual] = proAtualLista1
            posAtualLista1++
        } else {
            listaFinal[atual] = proAtualLista2
            posAtualLista2++
        }
        atual++
    }

    while (posAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posAtualLista1];
        posAtualLista1++
        atual++
    }

    while (posAtualLista2 < lista2.length) {
        listaFinal[atual] = lista2[posAtualLista2];
        posAtualLista2++
        atual++
    }

    return listaFinal
}

console.log(juntaListas(edGalho, edFolha))