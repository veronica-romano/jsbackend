class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }

    exibirsaldo(){
        console.log(this.saldo)
    }
}

class Clientep extends Cliente{
    constructor(nome, email, cpf, saldo, saldop){
        super(nome, email, cpf, saldo)
        this.saldop = saldop
    }
    depositap(valor){
        this.saldop += valor
    }
    
}

const glauber = new Clientep("glauber", "glauber@veronica.com", "332.797.090-40", 10000, 100000)

console.log(glauber)

glauber.depositar(555)
glauber.depositap(666)

console.log(glauber)


/* Por meio da herança é possível invocar propriedades e comportamentos definidos na classe base, aquela de quem ClientePoupanca herda, e invocar o método específico da poupança.

Mas porque isso é útil? A resposta é que reaproveitando o código não é necessário reescrever o método depositar(), O objeto tem acesso a esse método pelo mecanismo da herança. */