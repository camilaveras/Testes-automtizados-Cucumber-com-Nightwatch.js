var loginActions = {
    with: function (cpf, telefone){
        return this
        .navigate()
        //aguardando que um elemento seja exibido
        .waitForElementVisible('@form', 100000)
        .setValue('input[placeholder="Qual é o seu CPF ou CNPJ?"]', '06295485367')
        //se eu colocar assim> vai >         .setValue('input[placeholder="Digite seu celular"]', '11955301301')
        .setValue('input[placeholder="Digite seu celular"]', '11955301301')
        .click('@loginButton')
       
        //click_button 'Entrar'
    },
    expectAlertDanger: function(texto){
        return this
        .waitForElementVisible('@alertDanger', 10000)
        .assert.containsText('@alertDanger', texto)
    },
    expectAlertInfo: function (texto){
        return this
        .waitForElementVisible('@alertInfo', 10000)
        .assert.containsText('@alertInfo', texto)
    }
}

module.exports = {
    url: '/signin',
    commands: [loginActions],
    elements: {
        form: '.loginContainer',
       //passInput:'input[name=password',
        loginButton: '.button',
        alertDanger: '.alert-danger',
        alertInfo: '.panelContainer'
    }
}