import { Register } from "../pageobjects/register-page";
import { BoxForm } from "../pageobjects/register-box";
import { Finish } from "../pageobjects/register-finish";

describe("Limpar Formulário", () => {

   const form = new Register;
   const box = new BoxForm;
   const end = new Finish;

   given("Preencho os campos do formulario", () => {

    form.visit();
    form.name('Teste');
    form.secondName('Usuario');
    form.gender();
    form.phone('5558989821');
    box.countries();
    box.day();
    box.month();
    box.year();
    end.password()
    end.confirmPass();
   })

   when("Escolho Limpar Formuário", () => {

    end.refresh()

   })

   then("Os campos devem ser limpos",() => {

    form.emptyName();
    form.emptySecondName();
    form.emptyEmail();
    form.emptyPhone();
    end.emptyPassword();
    end.emptyConfirm();

   })
})