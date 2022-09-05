const user = {
    nome: "Veronica",
    email: "veronica@veronica.com",
    nascimento: "1991/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    },
    executaFuncao: function(fn) {
        fn.call(user, this.nome, this.email)
      }
}



/* user.exibirInfos()
const exibir = user.exibirInfos
exibir() */

function exibeInfos() {
    console.log(this.nome, this.email)
   }

const exibir = function(){
    console.log(this.nome)
}
const exibirNome = exibir.bind(user)
exibirNome()
exibir()

exibeInfos.call(user)

function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email)
    }
   }
   
   const newUser = new User('mariana', 'm@m.com')
   const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
   }
   
   newUser.exibeInfos() //mariana m@m.com
   newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com


   function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }

   
   user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com

   