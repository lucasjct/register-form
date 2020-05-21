/// <reference types ="cypress"/>

import { Register } from "../pageobjects/register-page";
import { BoxForm } from "../pageobjects/register-box";
import { Finish } from "../pageobjects/register-finish";
 
describe ('Register Form', () => {
    
    const form = new Register()
    const box = new BoxForm();
    const end = new Finish();

    given('Acesso a página do formulário', () => {
        
        form.visit();
        
    })

    when('Preencho os campos obrigatórios', () => {

       form.name("usuário");
       form.secondName("tests");
       form.email('usuario@tests.com');
       form.gender();
       form.phone('5558982321')
       box.countries();
       box.day();
       box.month();
       box.year();
    })

    then('O formulario deve ser submetido', () => {

        end.password()
        end.confirmPass();
        end.submit()
           
    })
})
