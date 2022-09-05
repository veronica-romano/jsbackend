const user = {
    nome: "Veronica",
    email: "veronica@veronica.com",
    nascimento: "1991/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    },

}

const admin = {
    nome: "Veronicas",
    email: "veronicas@veronica.com",
    nascimento: "1992/01/01",
    role: "admin",
    ativo: true,
    criarCurso(){
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()


