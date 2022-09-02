const nomes = ["Eu", "Tu", "Ele", "Ela"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter( (alunos, indice)=> notas[indice] < 5)
console.log(`reprovados: ${reprovados}`)