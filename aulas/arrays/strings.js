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