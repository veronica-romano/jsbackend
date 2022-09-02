const clientes = [
    { nome: 'veronica',
    idade: 28,
    cpf: '277.869.780-20',
    email: 'veronica@veronica.com', 
    tel: [ '(89) 3544-3166', '(63) 2491-7852' ],
    dependentes: [
      { nome: 'Peinvis', parentesco: 'filha', dataNasc: '15/11/2016' },
      { nome: 'Pingros', parentesco: 'neta', dataNasc: '01/01/2022' } 
    ]},
    { nome: 'glauber',
    idade: 31,
    cpf: '590.691.120-00',
    email: 'glauber@veronica.com', 
    tel: [ '(15) 3354-7446', '(97) 2862-8536' ],
    dependentes: [
        { nome: 'Leo', parentesco: 'filho', dataNasc: '31/10/2013' },
      { nome: 'Salem', parentesco: 'filho', dataNasc: '24/02/2017' },
      { nome: 'Olga', parentesco: 'filha', dataNasc: '15/05/2017' } 
    ]}
]
//spread operator
const dependentesLista = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(dependentesLista)