export default class User{
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome,email,nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome(){
        return this.#nome
    }
    get email(){
        return this.#email
    }
    get nascimento(){
        return this.#nascimento
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }

    set nome(novoNome){
        if (novoNome === '') {
            throw new Error('Formato não válido')
        } else {
            this.#nome = novoNome
        }
    }
    set email(novoEmail){
        this.#email = novoEmail
    }
    set nascimento(novoNascimento){
        this.#nascimento = novoNascimento
    }
    set role(novoRole){
        this.#role = novoRole
    }
    set ativo(novoAtivo){
        this.#ativo = novoAtivo
    }

/*     #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    } */

    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }

   
}

/* const novoUser = new User('Veronica', 'v@v.com', '1990/03/05')

console.log(novoUser)
console.log(novoUser.exibirInfos())
console.log(User.prototype.isPrototypeOf(novoUser)) //true */