class acessPage {

    go() {
        cy.viewport(1920, 1080) // Edita a resolução da tela
        cy.visit('https://blogdoagi.com.br/'); // Acessa a url di site
    }
    search() {
        cy.get('#search-open').click(); //Localiza e click no elemento "lupa"
    }
    submit() {
        cy.get('.desktop-search > .search-form > .search-submit').click(); //Localiza e click no elemento "Pesquisar"
    }
    imputData() {
        cy.get('.desktop-search > .search-form > label > .search-field').type('palavra'); //Insere o dado no form
    }
    assertValueEmpty() {
        cy.get('.archive-title') // faz a verificação do resultado da busca vazia
    }
    assertValue() {
        cy.get('.archive-title > span') // faz a verificação do resultado da busca
    }
}
export default new acessPage() //Exporta a classe acessPage