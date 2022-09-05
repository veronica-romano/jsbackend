function criaUser(nome, email) {
    return {
      nome,
      email,
      exibeInfos() {
        return `${nome}, ${email}`
      }
    }
   }

   const newUser = criaUser('Vero', 'vero@v.com')
console.log(newUser)
console.log(newUser.exibeInfos())


