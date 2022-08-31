function teste1(){
    let nota1 = 10;
    let nota2 = 6.5;
    let nota3 = 8;
    let nota4 = 7.5;
    let media = (nota1+nota2+nota3+nota4)/4
    console.log(media);
}

function teste2(){
    const notas = [10, 6.5, 8, 7.5]
    let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
    return console.log(media)
}
console.log(teste2())

jantarDeHoje = ['🍔', '🌭', '🍕']

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(jantarDeHoje)

/* No jantar de hoje, a pizza e o cachorro quente não estão presentes por conta do código jantarDeHoje.pop(), que remove o último elemento da lista e o ovo, a salada e a maçã verde entraram na lista com comando push. */
