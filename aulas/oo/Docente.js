import User from "./User.js";
export default class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role , ativo)
    }
   aprovaEstudante(estudante, curso){
    return `estudante ${estudante} aprovado(a) no curso de ${curso}`
   }
    
}

/* const novoDocente = new Docente('Glauber', 'g@v.com', '1990/01/01')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Veronica', 'JS'))

 */