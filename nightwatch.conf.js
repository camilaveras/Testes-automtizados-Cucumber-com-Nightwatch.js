const chromedriver = require('chromedriver');
require('babel-core/register')

//codigo do teste automatizado
//configuração padrão do nightwatch
module.exports = {
    src_folders: ["steps"], //tests is a folder in workspace which has the step definitions
    page_objects_path: 'pages/', //page_objects folder where selectors are saved
    test_settings: {
        default: {
            screenshots: {
                enabled: true,
                path: 'screenshots'
            },
            launch_url: 'http://www.queroquitar.com.br/login',
            webdriver: {
                start_process: true,
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};


//http://zombie-web:5000