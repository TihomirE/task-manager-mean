import { Component, OnInit } from '@angular/core';
import { PlaceholderHelperService } from 'src/app/core/helpers/placeholder/placeholder-helper.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html'
})

// Template driven form used here
export class LoginComponent implements OnInit {

    email: string;
    password: string;
    showErrMsg: boolean;

    formPlaceholders = {} as {
        email: string,
        password: string
    };

    constructor(
        private placeholderHelperService: PlaceholderHelperService,
        private authService: AuthService,
        private router: Router) { }

    login() {
        this.showErrMsg = false;
        this.authService.login(this.email, this.password).subscribe(
            (res: HttpResponse<any>) => {
                // TODO - raise a login success event (Subject) so the navbar can display user info and hide auth buttons
                this.router.navigate(['/app']);
            },
            // TODO - handle this with toaster
            (error) => alert('Login error > wrong username or password')
        );
    }

    setInitialLanguageVariables() {
        this.formPlaceholders = this.placeholderHelperService.setLoginPlaceholders();
    }

    ngOnInit() {
        this.setInitialLanguageVariables();
        this.showErrMsg = false;
    }

}
