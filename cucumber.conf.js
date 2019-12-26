const fs = require('fs');
const path = require('path');
const faker = require('faker');
const { setDefaultTimeout, After, Before, AfterAll, BeforeAll } = require('cucumber');
const { client, createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api');
const reporter = require('cucumber-html-reporter');

const attachedScreenshots = getScreenshots();

function getScreenshots(){
  try {
    const folder = path.resolve(__dirname, 'screenshots');

    const screenshots = fs.readdirSync(folder).map(file => path.resolve(folder, file));
    return screenshots;
  }catch(err){
    return[];
  }
}

setDefaultTimeout(60000);

// Hooks do Cucumber.js

//starta o webdriver e depois cria a sessão, executa uma vez só
BeforeAll(async () => {
  await startWebDriver();
  await createSession();
});

//redimensiona o tamanho da janela. Executa para cada cenario
Before(function () {
  client.resizeWindow(1400, 800)
});

//Depois de tudo ele gera um realatorio
AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
  setTimeout(() => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: 'report/cucumber_report.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        'App Version': '0.1.1',
        'Test Environment': 'Ambiente de Teste com Docker'
      }
    });
  }, 0);
});
//para cada cenario ele tira um screenshot
After(function () {
  let shotPath = path.resolve(`./screenshots/${faker.random.uuid()}.png`);
  client.saveScreenshot(shotPath)

  return Promise.all(
    getScreenshots()
      .map(file => {
        attachedScreenshots.push(file);
        return this.attach(fs.readFileSync(file), 'image/png');
      })
  );
});
