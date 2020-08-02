import { Component, OnInit } from '@angular/core';
import { PlaceholderHelperService } from 'src/app/core/helpers/placeholder/placeholder-helper.service';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html'
})

// Template driven form used here
export class LoginComponent implements OnInit {

    email: string;
    password: string;

    formPlaceholders = {} as {
        email: string,
        password: string
    };

    constructor(private placeholderHelperService: PlaceholderHelperService) { }

    login() {
        console.log(this.email + ' / ' + this.password);
    }

    setInitialLanguageVariables() {
        this.formPlaceholders = this.placeholderHelperService.setLoginPlaceholders();
    }

    ngOnInit() {
        this.setInitialLanguageVariables();
    }

}
