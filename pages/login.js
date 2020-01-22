var loginActions = {
    with: function (cpf, telefone){
        return this
        .navigate()
        //aguardando que um elemento seja exibido
        .waitForElementVisible('@form', 100000)
        .setValue('input[placeholder="Qual é o seu CPF ou CNPJ?"]', cpf)
        .setValue('input[placeholder="Digite seu celular"]', telefone)
        .click('@loginButton')
        //click_button 'Entrar'
    },


    expectAlertDanger: function(texto){
        return this
        .waitForElementVisible('@alertContainer ', 10000)
        .assert.containsText('@alertContainer ', texto)
    
    },
}

module.exports = {
    url: '/signin',
    commands: [loginActions],
    elements: {
        form: '.loginContainer',
        emailInput:'input[placeholder="Qual é o seu CPF ou CNPJ?"]',
        tellinput:'input[placeholder="Digite seu celular"]',
        loginButton: '.button',
        alertContainer : '.alertContainer'
   
 
    }
}
