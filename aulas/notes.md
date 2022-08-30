Javascript é uma linguagem interpretada e dinamicamente tipada.

No JavaScript, os tipos de dados podem ser divididos em duas categorias: tipos primitivos e tipos de objetos.

Os tipos primitivos do JavaScript incluem números, texto (conhecidas como strings) e valores booleanos. Já o tipo objeto é uma coleção de propriedades, onde cada uma possui um nome e um valor, sendo ele um valor primitivo ou outro objeto.

Pdemos criar um programa com paradigma funcional e lógico. O JavaScript é uma linguagem de programação multiparadigma e possui suporte para funcional, orientado a objetos ou lógico por exemplo.

Divisão por zero não é um erro no JavaScript. Diferente de outras linguagens de programação como Java ou Python, divisão por zero no JavaScript não gera um erro. O retorno desta operação é infinito ou infinito negativo (Infinity). Porém, a divisão de zero por zero resulta num NaN (not a number).

||: Operador “ou”, retorna true caso uma condição seja válida;
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.


a = []
b = 20
c = true 
d = ''

if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}// true

if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}//true

if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}//false 

if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
}//true

 Uma string vazia no JavaScript é considerada false.
 O valor de uma lista vazia é zero, e ao comparar com um número, temos 0 == 0 resultando true.
Quando comparamos 20 do tipo inteiro com '20' do tipo string com o operador == (igual, igual), apenas os valores das variáveis são comparados, resultando no valor true.