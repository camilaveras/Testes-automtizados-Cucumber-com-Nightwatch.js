#language:pt

Funcionalidade: Login

    Cenário: Login

        Quando eu faço login com "06295485367" e "11955301301"
        Então devo ver "Olá, este é o seu Painel!" no painel de área logada


    Esquema do Cenário: Tentar logar

        Quando eu faço login com "cpf" e "telefone"
        Então devo ver a mensagem de alerta "<texto>" "<TIPO>"


        Exemplos:
        |      cpf       |    telefone     |              texto               | TIPO |
        | 062.954.853-67 | (11) 95530-1300 | erro                             | info |
        | 062.954.853-67 | (11) 95530-1301 | sucesso                          | info |
        |     0629585367 |                 | Erro, insira o telefone          | info |
        |        1212121 | ab123           | Erro, cpf ou telefones invalidos | info |
