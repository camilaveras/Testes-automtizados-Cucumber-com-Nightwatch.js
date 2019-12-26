var userActions = {
    expectLoggedUser: function (name) {
        return this
        .waitForElementVisible('@welcomeTitle', 30000)
        .assert.containsText('@welcomeTitle', name)

    }
}
module.exports = {
    commands: [userActions],
    elements: {
        welcomeTitle: '.welcomeTitle'

    }
}