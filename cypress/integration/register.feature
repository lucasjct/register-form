Feature: Preencher Formulário, Limpar e Abrir Indexar

@testeUm

Scenario: Preencher dados obrigatórios no formulário

  Given Acesso a página do formulário
  When Preencho os campos obrigatórios
  Then O formulario deve ser submetido


@testeDois

Scenario: Limpar os elementos com "Refresh"

  Given Preencho os campos do formulario
  When Escolho Limpar Formuário
  Then Os campos devem ser limpos


@testeTres

Scenario: Checkar opção de indexar

  Given Acesso a página do formulario
  When Clico em "Choose Files"
  Then O arquivo local do usuário deve ser aberto
