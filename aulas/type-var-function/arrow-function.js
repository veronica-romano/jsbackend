function apresentar(){
    return `meu nome é ${nome}`;
}

const apresentarArrow = nome =>`meu nome é ${nome}`;
const soma = (num1, num2) => num1+num2; 
console.log(soma(20,20))//40

// arrow function com mais de uma linha de intrução

const soma2 = (num3, num4) => {
    if (num3 >=10|| num4 >=10) {
        return `somente números de 1 a 9`
    } else {
        return num3 + num4
    }
}
console.log(soma2(2,2))//4
console.log(soma2(20,2))//`somente números de 1 a 9`
console.log(soma2(2,20))//`somente números de 1 a 9`
console.log(soma2(10,10))//`somente números de 1 a 9`
console.log(soma2(9,9))//18