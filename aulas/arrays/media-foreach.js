const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0;
notas.forEach(nota => {
    somaNotas += nota
});

let media = somaNotas/notas.length;

console.log(media)