Analisando a forma como a função juntaListas() faz a junção dos arrays em um só, é possível concluir que a comparação e ordenação feita pela função só funciona corretamente quando recebe dois arrays já ordenados.  Ambas as listas são percorridas em paralelo e comparadas a partir do índice 0 do array.

Os valores guardados nas variáveis posicaoAtualLista1, posicaoAtualLista2, produtoAtualLista1 e produtoAtualLista2 são, respectivamente: valor numérico referente ao índice atual da primeira lista (recebida pela função via parâmetro); valor numérico referente ao índice atual da segunda lista (recebida pela função via parâmetro); um objeto com as propriedades titulo e preco, referente ao elemento contido no índice atual da primeira lista; um objeto com as propriedades titulo e preco, referente ao elemento contido no índice atual da segunda lista.

 É super importante sempre sabermos qual é o tipo de dado guardado nas variáveis que usamos em nosso código. Aqui, há uma distinção importante entre as variáveis que guardam o número do índice de um array e o dado que está contido nesse índice.

 A função juntaListas(), que percorre cada uma das duas listas informadas por parâmetro, compara os valores de cada uma, posiciona estes valores em uma lista única de acordo com o resultado da comparação e, por fim, retorna a lista unida.

 É importante lembrar que a função recursiva é aquela que chama a si mesma até encontrar uma condição de saída/parada. A recursividade é uma técnica muito aplicada em estruturas de dados, algoritmos e gráficos.

Por exemplo, é recursão o efeito de tela infinita que surge em suas chamadas de vídeo ou quando você coloca um espelho em frente ao outro. No entanto, temos a possibilidade e obrigação de inserir uma verificação que interrompa este comportamento, ou então a função entrará em loop infinito.

Utilizamos a recursão para construir o algoritmo do merge sort para que a lógica de dividir o array em partes cada vez menores pudesse se repetir até que restasse apenas um elemento. A recursão trabalha com a ideia de resolver um problema por partes menores, até que o problema esteja resolvido por completo. O que é parte do conceito por trás do funcionamento do próprio algoritmo do merge sort.

Dividir para conquistar, envolve quebrar um problema em partes menores até que estejam simples o suficiente para serem resolvidos. Assim como nos algoritmos selection sort e insertion sort, muitas vezes tentar ordenar um grande número de dados de uma vez não é eficiente. O paradigma de programação “dividir para conquistar” utiliza recursão para dividir o problema.