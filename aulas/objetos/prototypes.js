function Cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const veronica = new Cliente("Veronica", "442.154.140-08", "veronica@veronica.com", 10000)
console.log(veronica)