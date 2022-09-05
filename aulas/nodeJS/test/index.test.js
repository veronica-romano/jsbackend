const pegaArquivo = require('../index')
const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]
describe('pegaArquivo::', () => {
    it('deve ser uma function', () =>{
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('/mnt/c/Users/veronica.lsilva/Documents/alura/jsbackend/aulas/nodeJS/test/arquivos/texto1.md')

        expect(resultado).toEqual(arrayResult)
    })
    it('deve retornar mensagem "Não há links"', async () =>{
        const resultado = await pegaArquivo('/mnt/c/Users/veronica.lsilva/Documents/alura/jsbackend/aulas/nodeJS/test/arquivos/texto1 copy.md')
        expect(resultado).toEqual('não há links')
    })

})


