Feature: Preencher formulário

Scenario: Preencher dados obrigatórios no formulário

Given Acesso a página do formulário
When Preencho os campos obrigatórios
Then O formulario deve ser submetido
