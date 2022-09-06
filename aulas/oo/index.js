import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

//const novoUser = new User('Livia', 'livia.l.com', '2005-01-01')

//console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Veronica', 've@v.com', '1990/01/01')
console.log(novoAdmin.nome)
novoAdmin.nome = '  '
console.log(novoAdmin.nome)

