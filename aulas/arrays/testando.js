const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma) //170

/* const soma = numeros.reduce(function (acum, atual) {
 return atual + acum
}, 0) */

/* function operacaoNumerica(acum, atual) {
 return atual + acum
}

const soma = numeros.reduce(operacaoNumerica, 0) */