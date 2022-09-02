 o delete remove do objeto o valor da propriedade, assim como a chave.

 O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:

Em herança, o operador delete não remove propriedades herdadas de outro objeto, e aí sim, neste caso, retornará false se tentarmos fazer isso. 

const pessoa = {
   nome:"Bruce Banner",
   dataNascimento:"25/01/1980",
   carteiraIdentidade:"997776-X",
   email:"profbanner@email.com",
   telefone:"+552877776666",
   cidade:"Cachoeiro de Itapemirim",
   estado:"ES"
}

Para adicionar as novas propriedades precisamos somente informar o novo campo e o seu valor, ou seja,pessoa.cpf="15346626522-65" e pessoa.seguroSocial="854321985-9" .Para exibir os 4 primeiros dígitos da identidade e CPF, podemos chamar uma função de string chamada substring() e passar início e o fim da string que queremos como pessoa.cpf.substring(0,4)

Podemos usar a notação de ponto para adicionar novos campos a objetos já criados, lembrando de iniciar o campo adicionado. Como os campos identidade e CPF são do tipo string, podemos invocar o método substring() passando para a função a faixa da string que queremos retornar.

->objeto é um tipo de dado que reflete uma abstração dos objetos da vida real;

->a estrutura de um objeto literal no JavaScript é composta por pares de chave: valor separados por vírgula, dentro de chaves { };

->Que para acessar dados em um objeto podemos usar as notações de ponto e de colchete;

->para adicionar e manipular dados em um objeto precisamos saber como acessar suas propriedades.

o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol)

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

const cliente = {
 nome: "Jose",
 idade:33,
 email: "jose@email.com",
 telefones: ["+550033338888", "+550033334444"]
}
 cliente.animalEstimacao = [{
 nome: "Kripto",
 raça: "Cão",
 vacinado: true
}]
 cliente.animalEstimacao.push({
 nome: "Lex",
 raça: "Gato",
 vacinado: false
})

Um objeto pode conter um array de objetos, o que nos permite invocar desde funções comuns até arrays como filter().

Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create(). Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create

No JavaScript, objetos são classificados também como um array associativo (map ou dicionário), as propriedades são expressas como strings e podem ser manipuladas em tempo de execução.

Que para manipular objetos literais podemos utilizar os métodos do JavaScript para cada tipo de dado;
Que os valores em um objeto podem ser tipos primitivos (strings, números, booleanos e null), arrays ou outros objetos;
Que além das propriedades, também podemos atribuir funções que dão comportamento a um objeto.

Usamos com o spread operator, adicionando a sintaxe de três pontos (reticências) antes do nome de cada objeto literal, com cada objeto separado por vírgula, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave.

const mago = {
 nome: "Gandalf",
 classe: "mago"
}
 const guerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const ranger = {
 nome: "Legolas",
 classe: "ranger"
}

{ nome: 'Legolas', classe: 'ranger' }

O JavaScript sobrescreveu as chaves com o mesmo nome a cada ocorrência, assim o resultado final foi somente o último objeto declarado dentro do objeto personagens, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas. Exemplos: https://www.youtube.com/watch?v=f8a-qwKC5yk 

O processo de converter estruturas de dados em sequências de bytes ou caracteres. como no caso do JSON, é chamado de serialização (ou marshaling em algumas linguagens como Go.

 O for...in permite iterar sobre as propriedades de um objeto, e neste loop temos a flexibilidade de percorrer o objeto e executar uma série de comparações. Uma delas é usar o typeof e verificar o tipo da propriedade.

 -> para extrair chaves e valores de objetos é possível utilizar métodos de Object;

-> funções como .entries, .key e .value podem ser úteis na hora de trabalhar com objetos;

->o spread operator (ou sintaxe de espalhamento) pode ser uma opção para decompor objetos quando precisamos extraí-los de um array e formar um novo array.

