const {client} = require('nightwatch-api')
const {When, Then} = require('cucumber')

When('eu faço login com {string} e {string}', function (cpf, telefone) {
  let login = client.page.login()

    return login.with(cpf, telefone)
  });

  Then('devo ver {string} no painel de área logada', function (painel) {
    let sidebar = client.page.sidebar()

    return sidebar.expectLoggedUser(painel)
  });
  

  Then('devo ver a mensagem alerta {string} {string}', function (expectMessage, typeMessage){
    let login = client.page.login()

    switch(typeMessage){
      case 'info':
      
      login.expectAlertInfo(expectMessage)
      break;
    case 'danger':
    login.expectAlertDanger(expectMessage)
    break;

    }
 
  });