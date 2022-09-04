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