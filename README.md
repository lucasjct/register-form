# register-form
Preenchendo formulário com Cypress   

### Para rodar o projeto localmente:   

*  Clonar o projeto 
*  Instalar dependências com: `npm install`  
*  Para visualizar o teste no browser: `npx cyress open`  
*  Para rodar o teste modo headless: `npm test`    

   ### Para configurar teste visual com AppliTools:   


Resgistrar no site [AppliTools-Eyes](https://eyes.applitools.com/, "ApplITools-Eyes")

*  Rodar no projeto:   
`npm install @applitools/eyes-cypress` 

*  Confirmar se a configuração está ok:   
`npx eyes-setup`  

*  Acessar domínio applitools para resgatar api key   
*  Configurar api-key no terminal:   
  `export APPLITOOLS_API_KEY= "APPY-KEY"`
*  Setar api-key:   
`set APPLITOOLS_API_KEY=...`
