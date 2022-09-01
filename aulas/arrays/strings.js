//substrr(inicio,apartirde)
let frase= "Mergulhando em tecnologia."
console.log(frase.substr(0,11))
//slice == substr
let frase2= "Mergulhando em tecnologia."
console.log(frase2.slice(0,11)) 
//replace("oqueserasubs",oqsubstituirá)
let nome = "André";
let comunicacao = " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",nome));

let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#."))

let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens)

let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco);

/* Mais material: https://www.alura.com.br/artigos/strings-com-javascript-o-que-sao-e-como-manipular */