var loginActions = {
    with: function (cpf, telefone){
        return this
        .navigate()
        .waitForElementVisible('@form', 10000)
        .setValue('@tel', cpf)
        .setValue('@inputplaceholder="Digite seu celular"', telefone)
        .click('@loginButton')
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
        form: '.card-login',
        passInput:'input[name=password',
        loginButton: '.login-button',
        alertDanger: '.alert-danger',
        alertInfo: '.alert-info'
    }
}