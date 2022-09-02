const cliente = {
    nome: 'veronica',
    idade: 28,
    cpf: '277.869.780-20',
    email: 'veronica@veronica.com', 
    tel: [ '(89) 3544-3166', '(63) 2491-7852' ],
    dependentes: [{ 
        nome: 'Peinvis', 
        parentesco: 'filha', 
        dataNasc: '18/09/2017'
    }]
  }

  cliente.dependentes.push({nome: "Pingros", parentesco: "neta", dataNasc: "01/01/2022"})

  console.log(cliente)

  const maisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="01/01/2022")

  console.log(maisNova[0].nome)
  console.log(maisNova)