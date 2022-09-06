import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

//const novoUser = new User('Livia', 'livia.l.com', '2005-01-01')

//console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Veronica', 've@v.com', '1990/01/01')
console.log(novoAdmin.nome)
novoAdmin.nome = '  '
console.log(novoAdmin.nome)


const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome)//'Juliana Silva Souza'

const novoDocente = new Docente('prof', 'prof@p.com', '1980/01/01')
console.log(novoDocente.exibirInfos())
