#language:pt

Funcionalidade: Login

    Cenário: Login

        Quando eu faço login com "06295485367" e "11955301301"
        Então devo ver "Olá, bem vindo" no painel de área logada


    Esquema do Cenário: Tentar logar

        Quando eu faço login com "<cpf>" e "<telefone>"
        Então devo ver a mensagem de alerta "<texto>" "<TIPO>"


        Exemplos:
        | cpf | telefone    |  texto                      | tipo |
        |     | ab123       | opps. cade o email          | info |
        | 1212121| ab123    | opps. cade a senha          | info |
        | 2121212| 1234456  | opps. cade o email          | danger |
        | 23132332| ab123   | usuario ou senha invalida   | danger |