# Formulário com Cucumber  

O teste valida três comportamentos: submeter formulário, limpar os campos e abrir diretorio do usuário.  

### Para rodar o projeto localmente:   

*  Clonar o projeto 
*  Instalar dependências com: `npm i`  
*  Para visualizar o teste no browser: `npx cyress open`  
*  Para rodar o teste modo headless: `npm test`    

### Como instalar e configurar Cypress com plugin do Cucumber:  

* Instalar o Cypress: `npm install --save-dev cypress`
* Instalar o plugin: `npm install --save-dev cypress-cucumber-preprocessor`  

### Após instalado, seguir os seguintes passos:

* No package.json, cole a configuração do plugin:

```
"cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/steps"
  },
```

* Configurar o arquivo index.js no diretório: `cypress/plugins/index.js`, com o código abaixo:  
```
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```  

* Na pasta `integration`, escreva os *__Cenários de Teste__* em BDD, com a extensão `<nome-do-arquivo>.feature`  
* Crie a pasta`steps`dentro de `support`   
* Escreva os testes com Cypress na pasta `steps` (com as exatas instruções do arquivo `.feature` da pasta integration)
