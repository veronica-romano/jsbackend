A programação orientada a objetos busca abstrair conceitos da vida real para estruturas de código que possam ser reaproveitadas e combinadas, visando aproximar a lógica dos problemas que o sistema deve resolver.

Um objeto pode receber como valores dados primitivos e estruturados, como strings, números, booleanos, arrays e até mesmo outros objetos.

Objetos são tipos de dados que procuram corresponder à coisas do mundo real (físicas ou abstratas).

objeto literal: um tipo de dado composto de pares de chave/valor, com valores que podem ser tanto dados primitivos quanto arrays e outros objetos (também chamados de propriedades) e funções que dão comportamento ao objeto (também chamados de métodos)

A UML é a Linguagem de Modelagem Unificada - do inglês Unified Modeling Language. consiste na padronização de algumas notações para facilitar o entendimento entre os times de desenvolvimento que eventualmente irão lidar com um determinado sistema

bind() para ligar (bind) o valor de this a um determinado contexto;

call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this.

apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array

ao contrário das funções normais, arrow functions herdam automaticamente o contexto de onde foram criadas e não têm seu próprio “contexto de invocação”. Ou seja, não podem ser ligadas a contextos específicos com this e nem fazer uso dos métodos bind(), call() e apply().

Arrow functions também não possuem a propriedade prototype e por isso não podem ser usadas como funções construtoras - assunto que veremos em seguida. Por este motivo, não usamos arrow functions em nenhum momento para a criação de métodos durante o curso.

Documentação de arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Em JS as functions podem ser:
declaração de função
const soma = function(num1, num2) {
 return num1 + num2;
}

Declarações de função têm hoisting, pois o interpretador “puxa” para as primeiras linhas do arquivo todas as variáveis e todas as declarações de função, deixando seus códigos e dados “carregados” para aí sim começar a executar os códigos. 

expressão de função
const soma = (num1, num2) => {
 return num1 + num2;
}


expressão de função Arrow
const soma = (num1, num2) => num1 + num2;


elas têm seu conteúdo interpretado apenas no momento da execução


A sintaxe da função construtora é mais confortável para quem está acostumado com o uso de classes; já a factory function é mais flexível a respeito do tipo de objeto que será retornado.

function User(nome, email) {
 this.nome = nome
 this.email = email

 this.exibeInfos() {
   return `${nome}, ${email}`
 }
}
const newUser = new User('Mariana', 'm@m.com')
console.log(newUser)
console.log(newUser.exibeInfos())

A sintaxe de classe não existia no JavaScript até o ES6, e foi implementada como “açúcar sintático” por cima do modelo de protótipo nativo do JavaScript. Isso aconteceu por, entre outros fatores, uma demanda da comunidade dev que já estava acostumada a utilizar classes em orientação a objetos e preferia essa forma a ter que utilizar os protótipos.

A palavra-chave this se refere ao contexto em que uma função está sendo executada; esse contexto só é determinado no momento da chamada da função e só é possível saber qual será o valor de this para uma função se soubermos em que contexto esta função será executada - em outras palavras, a que objeto ela fará referência.

No modelo de protótipo, os objetos “herdam” recursos uns dos outros através da chamada propriedade protótipo. Quando criamos um objeto e definimos seu protótipo através de Object.setPrototypeOf(objetoQueHerda, objetoBase), estabelecemos uma cadeia de protótipos que começa no próprio tipo Object e vai até o último nível de objeto criado através dessa cadeia.

this representa o contexto em que determinada função ou método será executada

