/// <reference types ="cypress"/>

import { Register } from "./page-object/register-page";
import { BoxForm } from "./page-object/register-box";
import { Finish } from "./page-object/register-finish";
 
describe ('Register Form', () => {

    it('Personal Information', () => {

        const form = new Register()

        form.visit();
        form.name("usuário");
        form.secondName("tests");
        form.email('usuario@tests.com');
        form.gender();
        form.phone('5558982321')
    })

    it('Select Box', () => {

       const box = new BoxForm();

       box.countries();
       box.day();
       box.month();
       box.year();
    })

    it('Finish Form', () => {

       const end = new Finish();

        end.password('11A2sd123')
        end.confirmPass('11A2sd123');
        end.submit()
           
    })
})
