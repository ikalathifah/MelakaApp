import registerPage from "../pomMelaka/register";

describe('Fitur Register', () => {
  it('Test Function Register with Valid Credentials', () => {
      cy.visit('https://dashboard.melaka.app/register');
      cy.get('[class="title-large text-he"]').should('have.text', 'Selamat Datang di Melaka');
      registerPage.inputNama().type('Deven Ryn');
      registerPage.inputNomorTelepon().type('85169379718');
      registerPage.inputNamaBisnis().type('Kolam Renang');
      registerPage.buttonBrand().click();
      registerPage.inputEmail().type('devenryn@gmail.com');
      registerPage.inputPassword().type('deven12345');
      registerPage.confirmPassword().type('deven12345');
      registerPage.checkboxButton().click();
      registerPage.daftarButton().click();
      cy.wait(2000);
      cy.get('[class="text-[1.125rem] md:text-[1.375rem] font-bold leading-[1.75rem] md:leading-[1.75rem] text-he mb-6"]').should('have.text', 'Akunmu selesai dibuat!');
      cy.get('[data-testid="register-complete__sticky-box-text__verification__title"]').should('have.text','Link verifikasi telah dikirim ke email.');
  }
  )
})

describe('Fitur Register', () => {
  it('Test Function Register with Registered Credentials', () => {
      cy.visit('https://dashboard.melaka.app/register');
      cy.get('[class="title-large text-he"]').should('have.text', 'Selamat Datang di Melaka');
      registerPage.inputNama().type('Deven Ryn');
      registerPage.inputNomorTelepon().type('85169379718');
      registerPage.inputNamaBisnis().type('Kolam Renang');
      registerPage.buttonBrand().click();
      registerPage.inputEmail().type('devenryn@gmail.com');
      registerPage.inputPassword().type('deven12345');
      registerPage.confirmPassword().type('deven12345');
      registerPage.checkboxButton().click();
      registerPage.daftarButton().click();
      cy.wait(2000);
      cy.get('[class="text-[1.125rem] md:text-[1.375rem] font-bold leading-[1.75rem] md:leading-[1.75rem] text-he mb-6"]').should('have.text', 'Akunmu selesai dibuat!');
      cy.get('[data-testid="register-complete__sticky-box-text__verification__title"]').should('have.text','Link verifikasi telah dikirim ke email.');
  }
  )
})

describe('Fitur Register', () => {
  it('Test Function Register with Invalid Name', () => {
      cy.visit('https://dashboard.melaka.app/register');
      cy.get('[class="title-large text-he"]').should('have.text', 'Selamat Datang di Melaka');
      registerPage.inputNama().type('Ryn');
      registerPage.inputNomorTelepon().type('85169379718');
      registerPage.inputNamaBisnis().type('Kolam Renang');
      registerPage.buttonBrand().click();
      registerPage.inputEmail().type('devenryn@gmail.com');
      registerPage.inputPassword().type('deven12345');
      registerPage.confirmPassword().type('deven12345');
      registerPage.checkboxButton().click();
      registerPage.daftarButton().click();
  }
  )
})

describe('Fitur Register', () => {
  it('Test Function Register with Blank Number and Email', () => {
      cy.visit('https://dashboard.melaka.app/register');
      cy.get('[class="title-large text-he"]').should('have.text', 'Selamat Datang di Melaka');
      registerPage.inputNama().type('Deven Ryn');
      registerPage.inputNomorTelepon().click();
      registerPage.inputNamaBisnis().type('Kolam Renang');
      registerPage.buttonBrand().click();
      registerPage.inputEmail().click();
      registerPage.inputPassword().type('deven12345');
      registerPage.confirmPassword().type('deven12345');
      registerPage.checkboxButton().click();
      registerPage.daftarButton().click();
  }
  )
})

describe('Fitur Register', () => {
  it('Test Function Register with Different Pass and Confirm Pass', () => {
    cy.visit('https://dashboard.melaka.app/register');
    cy.get('[class="title-large text-he"]').should('have.text', 'Selamat Datang di Melaka');
    registerPage.inputNama().type('Deven Ryn');
    registerPage.inputNomorTelepon().type('85169379718');
    registerPage.inputNamaBisnis().type('Kolam Renang');
    registerPage.buttonBrand().click();
    registerPage.inputEmail().type('devenryn@gmail.com');
    registerPage.inputPassword().type('deven12345');
    registerPage.confirmPassword().type('deven67890');
    registerPage.checkboxButton().click();
    registerPage.daftarButton().click();
  }
  )
})

describe('Fitur Register', () => {
  it('Test Function Register with No Checkbox', () => {
    cy.visit('https://dashboard.melaka.app/register');
    cy.get('[class="title-large text-he"]').should('have.text', 'Selamat Datang di Melaka');
    registerPage.inputNama().type('Deven Ryn');
    registerPage.inputNomorTelepon().type('85169379718');
    registerPage.inputNamaBisnis().type('Kolam Renang');
    registerPage.buttonBrand().click();
    registerPage.inputEmail().type('devenryn@gmail.com');
    registerPage.inputPassword().type('deven12345');
    registerPage.confirmPassword().type('deven12345');
    registerPage.daftarButton().click();
  }
  )
})