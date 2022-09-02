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