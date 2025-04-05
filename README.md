# automation-cypress

Automação de testes end-to-end no site [AutomationExercise](https://automationexercise.com/) usando Cypress e Allure Report.

## Descrição

Este projeto foi desenvolvido para praticar e demonstrar habilidades em automação de testes end-to-end utilizando o framework Cypress. Ele inclui cenários de teste como:

- Registro de usuário
- Login
- Navegação
- Finalização de compras

---

## 🚀 Começando

### 1. Clone o repositório

```bash
git clone https://github.com/byCrismaria/automation-cypress.git
cd automation-cypress
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Instale o Allure CLI

```bash
npm install -g allure-commandline --save-dev
```

---

## ⚙️ Requisitos

- **Node.js** (versão 14 ou superior)
- **Yarn** (versão 1.22.22 ou superior)
- **Google Chrome** instalado

---

## 🧪 Executando os Testes

### Abrir a interface do Cypress

```bash
yarn cy:open
```

### Rodar os testes via terminal (modo headless)

```bash
yarn cy:run
```

---

## 📊 Gerando o Relatório Allure

### 1. Gerar o relatório

Após executar os testes:

```bash
yarn allure:report
```

### 2. Abrir o relatório no navegador

```bash
yarn allure:open
```

### 3. Limpar diretórios de resultados (opcional)

- **Unix/Linux/Mac:**

```bash
yarn allure:clearUnix
```

- **Windows:**

```bash
yarn allure:clearWin
```

---

## ☁️ GitHub Actions

Este projeto inclui três workflows com GitHub Actions:

- **Cypress Cloud Integration** – Integração com Cypress Cloud.
- **Cypress Tests** – Geração do relatório Allure com gráficos e tendências.
- **Cypress Tesults** – Pipeline multi-browser com integração Tesults.

---

## 📦 Dependências

- `@faker-js/faker` – Geração de dados falsos.
- `cypress` – Framework de testes.
- `version` – Controle de versão.
- `yarn` – Gerenciador de pacotes.

---

## 📝 Observações

- Os testes são apenas para fins educacionais/demonstração.
- O site AutomationExercise pode sofrer alterações, o que pode impactar os testes.
- Consulte a documentação do Cypress para melhor entendimento do funcionamento.

---

## 📚 Recursos Úteis

- [Documentação Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [AutomationExercise](https://automationexercise.com/)
- [Faker.js](https://fakerjs.dev/guide/)
- [Allure Report + Cypress](https://allurereport.org/docs/cypress/)
- [Tesults + Cypress](https://www.tesults.com/docs/cypress)

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com sugestões, correções ou melhorias.
