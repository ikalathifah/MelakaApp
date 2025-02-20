export default class loginPage {
    static buttonMasukRegister(){
        return cy.get('[class="text-button"]');
    }
    static inputEmail(){
        return cy.get('[id="input-:r0:"]');
    }
    static inputPassword(){
        return cy.get('[id="input-:r1:"]');
    }
    static buttonLogin(){
        return cy.get('[data-testid="login__button__login"]');
    }
    static aktivasiAkun(){
        return cy.get('[data-testid="account-activation__title"]');
    }
    static buttonProfil(){
        return cy.get('[class="bg-blue-B800 text-invert label-small md:label-large grid h-6 w-6 place-content-center rounded-full border md:h-9 md:w-9 border-transparent"]');
    }
    static buttonLandingPage(){
        return cy.get('[class="text-[0.875rem] font-normal leading-[1.25rem] tracking-[0.25px] w-full text-left text-he"]');
    }
    static buttonMasuk(){
        return cy.get('[class="text-[0.875rem] font-normal leading-[1.25rem] tracking-[0.25px] w-full text-left text-he"]');
    }
}    