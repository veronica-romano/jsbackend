class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo + valor
    }

    exibirsaldo(){
        console.log(this.saldo)
    }
}

const veronica = new Cliente("Veronica", "veronica@veronica.com", "442.154.140-08" , 10000)
veronica.exibirsaldo()
console.log(veronica)