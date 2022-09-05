const chalk = require('chalk');
const fs = require('fs');//lib nativa, nada precisa ser instalado

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;

  while((temp = regex.exec(texto)) !== null){
    arrayResultados.push( { [temp[1]] : temp[2]} )
  }

  return arrayResultados.length === 0 ? 'não há links' : arrayResultados;


}

function trataErro(erro) {
  throw new Error(chalk.red(erro));
}

//com async/await
async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(texto)
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

//pegaArquivo('./arquivos/texto1.md');


module.exports = pegaArquivo;