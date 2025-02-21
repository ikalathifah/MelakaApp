import loginPage from "../pomMelaka/login";

describe('Fitur Login', () => {
    it('Test Function Login with Valid Credentials to Account Activation', () => {
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
        cy.get('[class="slidedown-body-message"]').should('have.text', 'Aktifkan notifikasi untuk terus update pesanan baru dan pemberitahuan lainnya!');
        cy.get('[id="onesignal-slidedown-cancel-button"]').click();
        cy.get('[class="inline-flex w-full items-center gap-2"]').eq(0).should('have.text', 'Beranda');
    }
    )
})

describe('Fitur Login', () => {
    it('Test Function Login with Invalid Credentials', () => {
        cy.visit('https://dashboard.melaka.app/register');
        cy.get('[class="body-b2 text-le text-center"]').should('have.text', 'Sudah punya akun? Masuk disini.');
        loginPage.buttonMasukRegister().click();
        cy.get('[class="title-large"]').should('have.text', 'Login');
        loginPage.inputEmail().click();
        loginPage.inputPassword().click();
        loginPage.buttonLogin().click();
        cy.intercept("GET", "**/employees/action-summary").as("actionsummary");
        cy.get('[data-testid="login__field__email__error"]').should('have.text', 'Wajib diisi.');
        cy.get('[data-testid="login__field__password__error"]').should('have.text', 'Wajib diisi.');
    }
    )
})