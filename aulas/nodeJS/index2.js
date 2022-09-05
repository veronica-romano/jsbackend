const fs = require('fs');
const path = require('path');

async function pegarArquivo(caminho) {
 const caminhoAbsoluto = path.join(__dirname, '..', caminho);
 const encoding = 'utf-8';
 const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
 console.log('arquivos', arquivos);
}