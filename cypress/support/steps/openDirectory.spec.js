import { AddFile } from '../pageobjects/openDirectory'

describe('Abrir diretorio', () => {

    const index = new AddFile;

    given('Acesso a página do formulario', () => {

        index.visit()

    })

    when('Clico em "Choose Files"', () => {

        index.openIndex();

    })

    then("O arquivo local do usuário deve ser aberto", () => {

        index.localDirectory();
    })
})