const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

   const guerreiro1 = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro1)

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)