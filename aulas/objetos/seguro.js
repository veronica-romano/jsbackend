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

  //mostrar apenas as chaves
  console.log(Object.keys(cliente));
  //mostrar apenas os valores
  console.log(Object.values(cliente));
  //transforma tudo em arrays com arrays com chave no ídice 0 e valor no índice 1
  console.log(Object.entries(cliente));
  

  function seguro(obj) {
    const propsclientes = Object.keys(obj)
    if (propsclientes.includes("dependentes")) {
        console.log(`Fazer oferta para ${obj.nome}`)
    } else {
        
    }
  }

  seguro(cliente)