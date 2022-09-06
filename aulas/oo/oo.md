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

para utilizar a sintaxe ESM com NodeJS é preciso incluir, no arquivo package.json, a propriedade ”type”: “module” e sempre incluir a extensão do arquivo .js nos caminhos de importação

O sistema CJS (CommonJS) foi desenvolvido para funcionar como o sistema de exportação/importação de módulos do NodeJS.
O ESM (EcmaScript Modules) foi desenvolvido para que o JavaScript tivesse nativamente seu próprio sistema de módulos - estamos falando do JavaScript interpretado nos navegadores.
O NodeJS implementou o suporte ao ESM a partir da versão 13.

JS strict mode: serve para impedir que alguns comportamentos do JavaScript causem “falhas silenciosas” (transformando em erros que são lançados pelo interpretador) e corrigir alguns outros que podem induzir a bugs potenciais e comportamentos inesperados. Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode

Você pode decidir o static mode mas métodos estáticos não podem ser executados a partir de uma instância.Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/static

A herança de classe é importante para um melhor reaproveitamento de código, uma vez que permite a criação de novas funcionalidades com base em um modelo; além disso, faz com que os objetos e as regras de negócio criadas pelo sistema façam sentido e de fácil abstração.

As classes não são a forma nativa do JavaScript trabalhar com orientação a objetos e foram desenvolvidas sobre o modelo de protótipo.

O constructor() é uma função especial que recebe, via parâmetros, as propriedades que um objeto precisa ter ao ser instanciado a partir de uma classe; também é através do construtor que uma classe herda métodos e propriedades da superclasse através da função super(). Porém, dependendo da necessidade do projeto, uma classe pode não ter um construtor, apenas métodos.

Manejando versões do nodeJS: https://www.alura.com.br/artigos/descomplicando-o-trabalho-com-node

get não aceita nenhum parâmetro e set apenas um parâmetro (referente ao dado que será definido), o que ajuda a garantir que não irão receber parâmetros “inesperados” que podem causar bugs

Polimorfismo é o princípio segundo o qual duas (ou mais) classes que herdam de uma superclasse podem executar métodos vindos dessa superclasse e que têm a mesma assinatura, porém comportamentos diferentes da superclasse da qual herdaram.

O encapsulamento é o conceito de “esconder” propriedades e métodos para que não possam ser acessados por fora da classe, o que pode ser feito com o uso de atributos privados e propriedades assessors.

As classes em JavaScript foram implementadas a partir do modelo de herança de protótipo e podem ser consideradas como uma “abstração” deste conceito para tornar a experiência da programação orientada a objetos mais “palatável” (o que chamamos de “açúcar sintático” (syntatic sugar).
Funções construtoras têm uma estrutura um pouco diferente das funções comuns (por exemplo, a sintaxe de atribuição de propriedades com =) e servem de modelo para criação de objetos através do operador new.