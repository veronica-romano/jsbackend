const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 7, 9, 6];
let notasAlunos = [alunos, medias];

const nomeNota = (nomeAluno) => {
    if (notasAlunos[0].includes(nomeAluno)) {
        indice = notasAlunos[0].indexOf(nomeAluno)
        return notasAlunos[0][indice]+', sua média é '+notasAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"   
    }
}

console.log(nomeNota("cu"))