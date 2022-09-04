const chalk = require('chalk');
const fs = require('fs');//lib nativa, nada precisa ser instalado
const texto = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'
function trataErro(erro) {
  throw new Error(chalk.red(erro));
}

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const linksExtraidos = texto.match(regex)
}

//com async/await
async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
  console.log(chalk.green(texto))
  } catch (erro) {
    trataErro(erro)
  } finally {
    console.log(chalk.yellow('operação concluída'));
  }
} 


/* 
com promise sem async/await
function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  fs.promises
  .readFile(caminhoDoArquivo, encoding)
  .then((texto) => chalk.green(console.log(texto)))
  .catch((erro) => trataErro(erro))
  
} */

/*
sem promisse
function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  fs.readFile(caminhoDoArquivo, encoding, (erro, data) => {
    if (erro) {
      trataErro(erro);
    }
    console.log(chalk.green(data));
  })
} */

pegaArquivo('./arquivos/texto1.md');

[
  
  {

  }
]
