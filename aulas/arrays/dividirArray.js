const nomes = ["Walker",
"Randy","Reed",
"Larry","Barnes",
"Lois","Wilson",
"Jesse","Campbell",
"Ernest","Rogers",
"Theresa","Patterson",
"Henry","Simmons",
"Michelle","Perry",
"Frank","Butler",
"Shirley"];

const sala1 = nomes.slice(nomes.length/2)
const sala2 = nomes.slice(0,nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);
console.table(sala1)
console.table(sala2)