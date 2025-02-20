import loginPage from "../pomMelaka/login";

describe('Fitur Login', () => {
    it('Test Function Login with Valid Credentials', () => {
        cy.visit('https://dashboard.melaka.app/register');
        cy.get('[class="body-b2 text-le text-center"]').should('have.text', 'Sudah punya akun? Masuk disini.');
        loginPage.buttonMasukRegister().click();
        cy.get('[class="title-large"]').should('have.text', 'Login');
        loginPage.inputEmail().type('devenryn@gmail.com');
        loginPage.inputPassword().type('deven12345');
        loginPage.buttonLogin().click();
        cy.wait(2000);
        loginPage.aktivasiAkun().should('have.text', 'Aktivasi Akun');
    }
    )
  })