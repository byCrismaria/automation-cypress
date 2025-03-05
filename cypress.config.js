const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const os = require("node:os");
// Escreve as informações ambientais em um arquivo JSON
const fs = require('fs');
const path = require('path');


module.exports = defineConfig({
  projectId: "1ozdz2",
  defaultCommandTimeout: 5000,
  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      allureWriter(on, config);

      on('before:run', (details) => {
        // Adiciona informações ambientais ao Allure
        const environmentInfo = {
          OS_Platform: os.platform(),
          OS_Release: os.release(),
          OS_Version: os.version(),
          Node_Version: process.version,
          Cypress_Version: details.cypressVersion, // Versão do Cypress
        };

        // Converte o objeto em uma string no formato chave=valor
        const envContent = Object.entries(environmentInfo)
          .map(([key, value]) => `${key}=${value}`)
          .join('\n');

        const envFilePath = path.join(__dirname, 'allure-results', 'environment.properties');

        // Cria o diretório se não existir
        if (!fs.existsSync(path.dirname(envFilePath))) {
          fs.mkdirSync(path.dirname(envFilePath), { recursive: true });
        }
        fs.writeFileSync(envFilePath, envContent);
      });

      on('task', {
        allureReportTest: () => {
          console.log('Allure Report Test task executed.');
          return null; // o cypress exige um retorno 
        }
      });

      return config;
    },
  },
});