import { Injectable } from '@angular/core';
import { LanguageService } from '../../language/language.service';

@Injectable({
    providedIn: 'root'
})

export class PlaceholderHelperService {

    signUpFormPlaceholders = {} as {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        city: string,
        phone: string
    };

    loginFormPlaceholders = {} as {
        email: string,
        password: string
    };

    constructor( private languageService: LanguageService) { }

    setLoginPlaceholders() {
        if (this.languageService.selected === 'de') {
            this.loginFormPlaceholders.email = 'Email';
            this.loginFormPlaceholders.password = 'Passwort';
        } else if (this.languageService.selected === 'en') {
            this.loginFormPlaceholders.email = 'Email';
            this.loginFormPlaceholders.password = 'Password';
        } else {
            this.loginFormPlaceholders.email = 'Email';
            this.loginFormPlaceholders.password = 'Lozinka';
        }

        return this.loginFormPlaceholders;
    }

    setSignUpPlaceholders() {
        if (this.languageService.selected === 'de') {
            this.signUpFormPlaceholders.firstName = 'Vorname';
            this.signUpFormPlaceholders.lastName = 'Nachname';
            this.signUpFormPlaceholders.email = 'Email';
            this.signUpFormPlaceholders.password = 'Passwort';
            this.signUpFormPlaceholders.city = 'Stadt';
            this.signUpFormPlaceholders.phone = 'Telefon';
        } else if (this.languageService.selected === 'en') {
            this.signUpFormPlaceholders.firstName = 'First name';
            this.signUpFormPlaceholders.lastName = 'Last name';
            this.signUpFormPlaceholders.email = 'Email';
            this.signUpFormPlaceholders.password = 'Password';
            this.signUpFormPlaceholders.city = 'City';
            this.signUpFormPlaceholders.phone = 'Phone';
        } else {
            this.signUpFormPlaceholders.firstName = 'Ime';
            this.signUpFormPlaceholders.lastName = 'Prezime';
            this.signUpFormPlaceholders.email = 'Email';
            this.signUpFormPlaceholders.password = 'Lozinka';
            this.signUpFormPlaceholders.city = 'Grad';
            this.signUpFormPlaceholders.phone = 'Telefon';
        }

        return this.signUpFormPlaceholders;
    }
}
