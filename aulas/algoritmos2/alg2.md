Analisando a forma como a função juntaListas() faz a junção dos arrays em um só, é possível concluir que a comparação e ordenação feita pela função só funciona corretamente quando recebe dois arrays já ordenados.  Ambas as listas são percorridas em paralelo e comparadas a partir do índice 0 do array.

Os valores guardados nas variáveis posicaoAtualLista1, posicaoAtualLista2, produtoAtualLista1 e produtoAtualLista2 são, respectivamente: valor numérico referente ao índice atual da primeira lista (recebida pela função via parâmetro); valor numérico referente ao índice atual da segunda lista (recebida pela função via parâmetro); um objeto com as propriedades titulo e preco, referente ao elemento contido no índice atual da primeira lista; um objeto com as propriedades titulo e preco, referente ao elemento contido no índice atual da segunda lista.

 É super importante sempre sabermos qual é o tipo de dado guardado nas variáveis que usamos em nosso código. Aqui, há uma distinção importante entre as variáveis que guardam o número do índice de um array e o dado que está contido nesse índice.

 A função juntaListas(), que percorre cada uma das duas listas informadas por parâmetro, compara os valores de cada uma, posiciona estes valores em uma lista única de acordo com o resultado da comparação e, por fim, retorna a lista unida.

 É importante lembrar que a função recursiva é aquela que chama a si mesma até encontrar uma condição de saída/parada. A recursividade é uma técnica muito aplicada em estruturas de dados, algoritmos e gráficos.

Por exemplo, é recursão o efeito de tela infinita que surge em suas chamadas de vídeo ou quando você coloca um espelho em frente ao outro. No entanto, temos a possibilidade e obrigação de inserir uma verificação que interrompa este comportamento, ou então a função entrará em loop infinito.

Utilizamos a recursão para construir o algoritmo do merge sort para que a lógica de dividir o array em partes cada vez menores pudesse se repetir até que restasse apenas um elemento. A recursão trabalha com a ideia de resolver um problema por partes menores, até que o problema esteja resolvido por completo. O que é parte do conceito por trás do funcionamento do próprio algoritmo do merge sort.

Dividir para conquistar, envolve quebrar um problema em partes menores até que estejam simples o suficiente para serem resolvidos. Assim como nos algoritmos selection sort e insertion sort, muitas vezes tentar ordenar um grande número de dados de uma vez não é eficiente. O paradigma de programação “dividir para conquistar” utiliza recursão para dividir o problema.

 É possível encontrar o mesmo algoritmo implementado de formas diferentes. Porém, a lógica de funcionamento do algoritmo sempre permanece a mesma. Por esse motivo não começamos direto pelo código e sim entendendo como o algoritmo é pensado e como ele deve se comportar.

 Posicionar o pivô no meio do array é uma das opções para este algoritmo, mas poderia ser um elemento escolhido de forma aleatória ou o último elemento do array, não há diferença em posicionar o pivô entre qualquer uma destas três opções - você pode fazer o teste de mesa e observar o comportamento dos elementos. Porém, haverá mudança no código.

 utilizamos sempre o elemento do meio do array como pivô para separar maiores e menores, porém a posição do pivô com relação ao array completo vai sendo modificada durante a ordenação, o array original vai ser “fatiado” em pequenas partes, e sempre que isso acontece é definido um novo pivô a partir do meio do array.

 Se o NodeJS retorna o erro RangeError: Maximum call stack size exceeded, ou “tamanho máximo da pilha de chamadas excedido” e encerra a execução.

Por isso, é muito importante sempre testar as funções recursivas e definir quando interromper a recursividade.

A busca binária utiliza recursão de uma forma similar ao merge sort e ao quick sort para dividir o array em partes cada vez menores. A cada chamada recursiva, o array é dividido em seções cada vez menores, e o valor buscado é situado entre à esquerda (menor) ou à direita (maior) do que o elemento central. Dessa forma, é possível descartar metade dos elementos de cada seção, a cada chamada da função.

A busca binária é mais eficiente em termos de quantidade de operações necessárias do que a busca linear,  é possível localizar um elemento em um array com um número máximo de operações muito menor do que a busca linear.

 Posicionar o pivô no primeiro elemento do array pode levar o algoritmo a se comportar no pior caso possível, se o array já tiver algum tipo de ordenação interna,  a ordenação do array é feita em partes bem pequenas para que depois ele seja reconstruído. Desconstruir essas partes já ordenadas, para desordená-las temporariamente e só depois reconstruí-las não é uma boa escolha.

 sort() documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

 Algoritmos de ordenação podem ser estáveis ou instáveis. Informações: https://pt.stackoverflow.com/questions/188646/o-que-define-um-algoritmo-de-ordena%C3%A7%C3%A3o-est%C3%A1vel

 testes de estabilidade: https://stackoverflow.com/questions/3026281/what-is-the-stability-of-the-array-sort-method-in-different-browsers

 os termos melhor caso e pior caso se referem à quantidade de recursos a ser utilizado na execução, que pode ser tempo de execução ou memória.

 a notação Big O se refere a uma classificação de algoritmos de acordo com o tempo de execução, à medida em que aumenta a quantidade de dados a serem manipulados e a quantidade de memória exigida.

 Notações Big O:
 O(1): representa um algoritmo que é executado em tempo constante.

O(n): algoritmo que é executado em tempo linear, onde execuções aumentam de acordo com as entradas - como a busca linear.

O(n log(n)):algoritmo que reduz pela metade uma lista a cada vez que é executado - como merge sort e quick sort.

O(n²): tempo quadrático,assim que o número de elementos na entrada aumenta, as execuções aumentam quadraticamente. Deve ser evitado.

sempre que trabalharmos com valores O(log n), estamos nos referindo a base 2.

Tanto o merge sort quanto o quick sort executam operações linearmente (n) e também em (log n), então é um algoritmo de complexidade n log(n).

Valores de crescimento logarítmico ou O(log(n)), são números que, colocados como potência, resultam na quantidade de elementos que estamos buscando. Por exemplo, o log de 1024 na base 2 é 10, pois 2x2x2x2x2x2x2x2x2x2 = 1024.

O paradigma “dividir para conquistar” resulta em algoritmos mais eficientes do que os que atacam um problema inteiro de uma vez só.