# automation-cypress

## Projeto Cypress para Automação no site AutomationExercise

**Descrição**

Este projeto Cypress fornece um conjunto de testes para praticar a automação de testes no site AutomationExercise ([https://automationexercise.com/](https://automationexercise.com/)). O projeto inclui testes para diversos cenários, como:

* **Registro de usuário**
* **Login**
* **Utilização da função de session**
* **Navegação no site**
* **Adição de produtos ao carrinho**
* **Finalização de compra**
* **Geração do relatório Allure-report**
* **Workflows Cypress Cloud Integration e Cypress tests**

**Instalação**

Para baixar e utilizar o projeto, siga estas etapas:

1. **Clone o repositório:**

```bash
git clone https://github.com/byCrismaria/automation-cypress.git
```
2. **Instalar o Allure-report**
   
```bash
   npm install -g allure-commandline --save-dev
```
**Requisitos de Software**
Para executar os testes deste projeto, você precisará ter o seguinte software instalado em seu computador:

* **Node.js:** Versão 14 ou superior
* **Yarn:** Versão 1.22.22 ou superior


**Executando os Testes**

Para executar os testes caso não tenha yarn instalado, execute o seguinte comando:

```bash
npx cypress run
```
Para executar os testes caso tenha yarn instalado, execute o seguinte comando:

```bash
yarn cypress open
```
**Running Tests com GitHub Actions**

Este projeto inclui dois fluxos de trabalho do GitHub Actions: um para executar Cypress tests que irar gerar o relatório Allure e outro para executar testes no Cypress Cloud.

**Dependências**

O projeto utiliza as seguintes dependências:

* **@faker-js/faker:** Gera dados de teste falsos, como nomes, endereços e números de telefone.
* **cypress:** Framework de automação de testes para web.
* **version:** Gerencia o número da versão do projeto.
* **yarn:** Gerenciador de pacotes para JavaScript.

**Observações**

* Os testes neste projeto são apenas para fins de demonstração e podem precisar ser atualizados para se adequar a alterações no site AutomationExercise.
* É recomendável que você leia a documentação do Cypress antes de usar este projeto.

**Recursos Adicionais**

* Documentação do Cypress: [https://docs.cypress.io/guides/overview/why-cypress](https://docs.cypress.io/guides/overview/why-cypress)
* Site AutomationExercise: [https://automationexercise.com/](https://automationexercise.com/)
* Documentação Faker: [https://fakerjs.dev/guide/](https://fakerjs.dev/guide/)
* Documentação Allure-report: [https://allurereport.org/docs/cypress/](https://allurereport.org/docs/cypress/)
  

**Contribuições**

Se você tiver alguma sugestão ou melhoria para este projeto, sinta-se à vontade para contribuir no repositório GitHub.
