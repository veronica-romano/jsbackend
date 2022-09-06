import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role , ativo)
    }
    criarCurso(nomeDoCurso, vagas){
        return `Curso criado: Curso de ${nomeDoCurso} com ${vagas} vagas.`
    }
    
}

/* const novoAdmin = new Admin('alguem', 'a@v.com', '2000/01/01')
/* console.log(novoAdmin)
console.log(novoAdmin.exibirInfos()) */

/* console.log(novoAdmin.criarCurso('JS', 20))

 */