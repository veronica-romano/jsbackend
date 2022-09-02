const cliente = {
    nome: 'veronica',
    idade: 28,
    cpf: '277.869.780-20',
    email: 'veronica@veronica.com', 
    tel: [ '(89) 3544-3166', '(63) 2491-7852' ],
    dependentes: [
      { nome: 'Peinvis', parentesco: 'filha', dataNasc: '18/09/2017' },
      { nome: 'Pingros', parentesco: 'neta', dataNasc: '01/01/2022' } 
    ],
    saldo:100,
    depositar: function(valor){
        this.saldo += valor
    }
  }

  console.log(cliente.saldo)
  cliente.depositar(30)
  console.log(cliente.saldo)