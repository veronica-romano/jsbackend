const listaChamada = ["Simmons",
"Michelle","Perry",
"Frank","Butler",
"Shirley"];
//parâmetros: índice de início, de fim e o substituto(opcional)
//listaChamada.splice(1,2,"David");

listaChamada.splice(2,0,"David");

console.log(`Lista: ${listaChamada}`);


animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)

/* No aquário, o golfinho e o tubarão não estão presentes por conta do código animaisDoAquario.splice(3,2,'🐟'), que remove dois elementos do array, a partir da posição 3. Sendo assim, os elementos com índice 3 e 4 e os dois peixes entraram nas posições definidas pelo splice. */