Algoritmos podem ser quebrados em partes menores e estas partes utilizadas em conjunto na resolução de um problema.

Dependendo do problema que queremos resolver, um algoritmo pode se tornar muito longo, com muitas sequências de passos, e mais difícil de se construir e testar. Assim como em código, é costume quebrar o algoritmo de resolução de uma tarefa complexa em vários algoritmos (ou partes) menores, especializadas e intercambiáveis para cada parte do problema.

Algoritmos são sequências finitas de ações para a resolução de um problema.

Estas ações podem ser traduzidas em passos lógicos de um código, instruções para uma receita culinária ou montagem de um móvel, ou até mesmo para ilustrar sequências de ações executáveis que fazemos no nosso dia-a-dia.

A mesma sequência finita de ações de um algoritmo pode ser utilizada para resolver o mesmo problema em diversas linguagens de programação.

Vimos que a resolução de um problema utilizando algoritmos pode muito bem começar fora do código e depois ser “traduzida” para a linguagem de programação de nossa preferência, mas o conceito por trás da solução é o mesmo.

O método sort(), executado sem nenhum parâmetro, interpreta todos os elementos do array como strings e ordena em ordem alfabética crescente, a partir da tabela Unicode. Para outros tipos de ordenação, por exemplo numérica ou decrescente, é preciso passar parâmetros de comparação para o sort(). Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

Embora cada linguagem faça a implementação usando seus próprios métodos e funções, a lógica por trás do algoritmo permanece a mesma, cada linguagem tem sua própria sintaxe e forma de trabalhar com os arquivos, funções, loops e declaração de variáveis. Inclusive a forma que usamos na aula para implementar o algoritmo com JavaScript não é a única.

Antes de qualquer código, o que caracteriza o Selection Sort são os passos lógicos por trás da resolução do problema e de que forma o algoritmo faz isso.

Um teste de mesa é justamente o processo manual de verificar todas as linhas de um código e executá-lo passo a passo com ajuda de, por exemplo, papel e lápis para anotar qual os valores das variáveis em cada passo de cada linha. É como compilar/interpretar um bloco de código usando o cérebro como compilador/interpretador.

O importante no teste de mesa (com ou sem uso da tabela) é percorrer cada linha e executar realmente o código, anotando as criações/reatribuições de variáveis, resultados de operações matemáticas (se houver), alterações em arrays e objetos, etc. Dessa forma, resultados não esperados na execução do código já vão aparecer na hora.

Ao criarmos a função insertionSort(), substituímos livros por lista e livro por item, qualquer pessoa que ler a função sabe que ela está pronta para receber listas de produtos diversos, desde que contenham a propriedade preco, a lógica por trás de Selection Sort e Insertion Sort funciona de forma diferente,  o resultado final é o mesmo (uma lista ordenada), porém a forma como o algoritmo foi pensado e a forma como foi traduzido em código é diferente.

Uma forma de medirmos a performance de um algoritmo é através do tempo. Um algoritmo “lento”, ou seja, que leva mais tempo para executar em comparação com outro algoritmo que resolve o mesmo problema, pode impactar inclusive a experiência de usuário de um programa (nenhum usuário quer esperar, por exemplo, dois minutos para obter uma lista de produtos ordenada por preço).

Sempre que trabalhamos com algoritmos, um dos aspectos mais importantes é a performance.  O que chamamos de performance é a quantidade de recursos computacionais que o algoritmo precisa para executar.

A quantidade de dados processados impacta diretamente na performance de um algoritmo.  Como vimos durante a aula, uma lista com poucos elementos não impacta em nada na performance de um algoritmo, mas é possível ver o impacto na quantidade de processos (operações) executados à medida em que a quantidade de dados cresce. Lembrando que trabalhamos com quantidades grandes de dados!


elementos	n	2n	n^2	2*n^2	1	n^3
1	=+A2	=2*A2	=A2*A2	=2*D2	1	=A2A2A2
=+A2*2	=+A3	=2*A3	=A3*A3	=2*D3	1	=A3A3A3
=+A3*2	=+A4	=2*A4	=A4*A4	=2*D4	1	=A4A4A4
=+A4*2	=+A5	=2*A5	=A5*A5	=2*D5	1	=A5A5A5
=+A5*2	=+A6	=2*A6	=A6*A6	=2*D6	1	=A6A6A6


Big O Notation é utilizada para expressar a complexidade de um algoritmo, com relação ao tempo e volume de recursos computacionais necessários para executar esse algoritmo, de acordo com o volume de dados de entrada. usamos O para classificar funções (implementações de algoritmos) de acordo com a forma como crescem em complexidade. Exemplos: https://www.bigocheatsheet.com/