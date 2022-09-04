Antes de trabalhar com um projeto em NodeJS do zero, uma das primeiras coisas que fazemos é criar um arquivo de configuração utilizando o comando npm init ou yarn init, assim como para todas as instalações de libs externas utilizamos o comando npm install <nome do pacote> ou yarn add <nome do pacote>.

O NPM e o YARN têm algumas pequenas diferenças nos comandos e na forma como lidam com os pacotes. 

Documentação npm: https://docs.npmjs.com/
Documentação yarn: https://yarnpkg.com/

Documentação MArkdown: https://www.markdownguide.org/getting-started/

Existe uma convenção no uso de ESM em projetos NodejS, que é utilizar a extensão .mjs para distinguir quais arquivos são módulos, continuando com a extensão .js para os arquivos que não exportam módulos.

Podemos usar o formato de exportação de módulos conhecido como CommonJS, no qual explicitamos que determinada função será exportada, ou seja, ficará visível para outros arquivos .js no seguinte formato:

module.exports = function mensagem(mensagem) {
 return mensagem;
};

Usando a padronização CommonJS ou CJS, exportamos funções entre módulos marcando-as com o module.exports.

Um arquivo .js é entendido como um módulo independente e para trabalhar com esses módulos com o NodeJS usamos a função require().

Para ter acesso a algum recurso definido em outro módulo .js, utilizamos a função require(), invocando-a no arquivo em que desejamos usar o recurso.

Quando falamos de método no contexto de programação, nos referimos a uma função que está associada a um objeto. No caso, o objeto do tipo função que acessamos através da constante const chalk, uma função só é executada corretamente se receber argumentos corretos como parâmetro. 
Documentação do chalk: https://www.npmjs.com/package/chalk

Perguntas para responder ao usar uma lib:
Como importar métodos da lib para o meu código?
Quais métodos e/ou palavras-chaves que disponibilizados e quais os usos?
Quais (e quantos) são os args que devo passar como parâmetro para que os métodos funcionem? Strings? Números? Um array de informações?

.then(), Async e awayt: https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

Além do .then() e do async/await, o JavaScript também tem um método construtor para resolver promessas, o Promise().

Enquanto .then() e async/await são utilizados quando temos que lidar com promessas já existentes - por exemplo, ao executarmos o método fetch() que, por definição, sempre retorna uma promessa, usamos o construtor Promise() para escrever do zero nossas próprias promessas.

promessas podem ser fulfilled (realizada, completa) ou rejected (rejeitada). Se não estão fulfilled nem rejected estão pending (pendentes). Com a finalização do processamento, a promessa passa para o estado de settled (concluída). Se a promessa está settled seu resultado não se altera mais. Ou seja, uma promessa que se concluiu como rejected não muda mais para o estado de fulfilled e vice-versa.

o try...catch possibilita lidar com um erro identificando o trecho em que ele pode ocorrer (try) e captando o erro (catch) para tratá-lo.

Tanto catch quanto finally são opcionais, mas o try deve sempre estar acompanhado de um ou outro. finally não recebe nenhum dado através dos parênteses ( )

Regulkar expressions ou expressões regulares são objetos que mapeiam padrões de texto por meio de uma linguagem própria, com sintaxe e regras específicas.
Ajuda: https://regex101.com/
Info e documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

Para trabalhar com as regex utilizamos métodos próprios de string, como match(), search(), replace(), matchAll() e split(). Documetação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#
O JavaScript também tem alguns métodos próprios do objeto RegExp: test() e exec(). Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp

libs para validações de formulários:
Joi: https://joi.dev/
Yup: https://www.npmjs.com/package/yup
Yup/testes: https://joi.dev/tester/

curso de regex: https://www.alura.com.br/curso-online-expressoes-regulares