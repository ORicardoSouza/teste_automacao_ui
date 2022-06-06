import acessPage from '../support/acessPage'

describe('Teste de automação', () => {
    it('Cenário com pesquisa sem palavra_chave:', () => {

        acessPage.go()
        acessPage.search()
        acessPage.submit()
        acessPage.assertValueEmpty()
    });
    it('Cenário com pesquisa com palavra_chave:', () => {

        acessPage.go()
        acessPage.search()
        acessPage.imputData()
        acessPage.submit()
        acessPage.assertValue()
       
    });
});