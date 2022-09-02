function Cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function CliPoupanca(nome, cpf, email, saldo, saldoP){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoP = saldoP
}

const glauber = new CliPoupanca("Glauber", "295.460.450-63", "glauber@veronica.com.br", 100000, 2000)

console.log(glauber)

CliPoupanca.prototype.depositarP = function(valor){
    this.saldoP += valor
}

glauber.depositarP(355)

console.log(glauber.saldoP) //existe somente para clientes poupança, as contas normais ficam como undefined

console.log(glauber)