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
    it('deve retornar array com resultados', () => {
        expect(pegaArquivo('').toBe(arrayResult))
    })
})

