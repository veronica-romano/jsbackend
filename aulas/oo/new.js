/* function User(nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('veronika', 'v@v.com');
console.log(novoUser.exibirInfos()) 

function Admin(role){
    User.call(this, 'Veronik', 've@v.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const outroUser = new Admin('admin')

console.log(outroUser.exibirInfos())
console.log(outroUser.role) */

/* const User = {
    exibirInfos: function(nome){
        return nome
    }
}

const novoUser = Object.create(User)
console.log(novoUser.exibirInfos('Verronikam')) */


const User = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(nome){
        return this.nome
    }
}

const novoUser = Object.create(User)
novoUser.init('Verronique', 'ver@v.com')
console.log(novoUser.exibirInfos())
// console.log(novoUser.exibirInfos('Verronikam'))
// console.log(User.isPrototypeOf(novoUser))