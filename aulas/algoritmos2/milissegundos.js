function dorme(milissegundos) {
    return new Promise(resolve => setTimeout(resolve, milissegundos));
  }

  async function incrementaNumero(numero){
    console.log(numero)
    await dorme(200)
  
    if (numero === 10) {
            return 'finalizou'
    }
    return incrementaNumero(numero + 1)
  }
incrementaNumero(1)