/* let x = "";
console.log(x);
x = "oi"; */
//formas de escrever funções
//1 - declarando a função
function imprimeTexto(texto){
    console.log(texto)
}
//executando a função
imprimeTexto("oie");
imprimeTexto("oieeeeee");

/* Trechos de código chamados apenas quando precisamos/queremos, podemos usar e reutilizar inclusive com outras partes de código */

function soma(){
    /* const resultado = 2+2;
    return console.log(resultado); */

    return 2+2;
    
}
//chamando a função soma
console.log(soma());

//O resultado de uma função dentro de outra
imprimeTexto(soma())