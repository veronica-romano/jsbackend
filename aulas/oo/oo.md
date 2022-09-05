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

