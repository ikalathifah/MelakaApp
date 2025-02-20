export default class registerPage {
    static inputNama(){
        return cy.get('[id="input-:R36l6:"]');
    }
    static inputNomorTelepon(){
        return cy.get('[id="input-:R156l6:"]');
    }
    static inputNamaBisnis(){
        return cy.get('[id="input-:R76l6:"]');
    }
    static buttonBrand(){
        return cy.get('[id="brand-:Re96l6:"]');
    }
    static buttonPenjual(){
        return cy.get('[id="online_seller-:Ri96l6:"]');
    }
    static inputEmail(){
        return cy.get('[id="input-:Rb6l6:"]');
    }
    static inputPassword(){
        return cy.get('[id="input-:Rd6l6:"]');
    }
    static confirmPassword(){
        return cy.get('[id="input-:Rf6l6:"]');
    }
    static checkboxButton(){
        return cy.get('[id="register__checkbox__tnc"]');
    }
    static daftarButton(){
        return cy.get('[data-testid="register__button__sign-up"]');
    }
    static lanjutDashboardButton(){
        return cy.get('[data-testid="register-complete__button__go-to-dashboard"]');
    }
    static popupAktifkanNotifikasi(){
        return cy.get('[class="slidedown-body-message"]');
    }
    static aktivasiAkun(){
        return cy.get('[data-testid="account-activation__title"]');
    }
    static buttonKirimUlangVerif(){
        return cy.get('[data-testid="account-activation__button__resend-verification"]');
    }
    static buttonProfil(){
        return cy.get('[class="bg-blue-B800 text-invert label-small md:label-large grid h-6 w-6 place-content-center rounded-full border md:h-9 md:w-9 border-transparent"]');
    }
    static buttonLandingPage(){
        return cy.get('[class="text-[0.875rem] font-normal leading-[1.25rem] tracking-[0.25px] w-full text-left text-he"]');
    }
    static buttonMasuk(){
        return cy.get('[data-testid="landing__button__login"]');
    }
    
}