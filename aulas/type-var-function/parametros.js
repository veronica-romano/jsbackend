//parametros de função
function soma(num1, num2){
    return num1+num2;
}
//console.log(soma(55, 7)) //NaN
console.log(soma(55, 7));
console.log(soma(55, -7));
console.log(soma(-55, 7));

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e eu tenho ${idade} anos.`
}

console.log(nomeIdade(28, "Veronica")) // Meunome é 28 e eu tenho Veronica anos.

console.log(nomeIdade("Veronica", 28))// Meunome é Veronica e eu tenho 28 anos.

function multiplica(num3, num4){
    return num3 * num4;
}

console.log(multiplica(soma(5, 6), soma(6,6))); //132

console.log(multiplica(soma(6,6)));//NaN

function multiplica2(num5 = 1, num6 = 1){
    return num5 * num6;
}

console.log(multiplica2(soma(5, 6), soma(6,6))); //132

console.log(multiplica2(soma(6,6)));//12


//função sem retorno e sem parâmetro:
function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

   //função sem retorno e com parâmetro
   function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Veronica')

   function cumprimentar2(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa2(nomePessoa) {
    console.log(`${cumprimentar2()} Meu nome é ${nomePessoa}`)
   }
   cumprimentaPessoa2('Veronica') // “Oi gente! Meu nome é Paula”


   //função com return e mais de um parâmetro
   function operacaoMat(numero1, numero2, numero3) /* parâmetros */ {
    return console.log(numero1 + numero2 + numero3)
   }
   
   operacaoMat(15, 30, 45) /* argumentos */// 90


   function comParametro(param) {
    console.log(param)
}
comParametro()

/* Em JavaScript, os parâmetros de funções tem undefined como valor predefinido. */