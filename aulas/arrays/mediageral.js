const sala1 = [7,8,8,7,10,6.5,4,10,7];
const sala2 = [6,5,8,9,5,6];
const sala3 = [7,3.5,8,9.5];

function mediaSala(notasdaSala) {
    const somaDasNotas = notasdaSala.reduce((acum, atual)=>atual+acum,0)
    return somaDasNotas/notasdaSala.length
}
console.log(`A média da sala 1 é ${mediaSala(sala1)}`)
console.log(`A média da sala 2 é ${mediaSala(sala2)}`)
console.log(`A média da sala 3 é ${mediaSala(sala3)}`)