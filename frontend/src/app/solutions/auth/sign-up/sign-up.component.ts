import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlaceholderHelperService } from 'src/app/core/helpers/placeholder/placeholder-helper.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up-component',
    templateUrl: './sign-up.component.html'
})

// Reactive forms used here
export class SignUpComponent implements OnInit {

    signUpForm = this.fb.group({
        // firstName: ['', Validators.required],
        // lastName: [''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        // city: [''],
        // phone: ['']
    });

    formPlaceholders = {} as {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        city: string,
        phone: string
    };

    constructor(
        private fb: FormBuilder,
        private placeholderHelperService: PlaceholderHelperService,
        private authService: AuthService,
        private router: Router) { }

    onSubmit() {
        this.authService.signup(this.signUpForm.value.email, this.signUpForm.value.password).subscribe(
            (res: HttpResponse<any>) => {
                this.router.navigate(['/app']);
            },
            // TODO - handle this with toaster
            (error) => alert('User/email already exists')
        );
        console.log('Form submited');
    }

    setInitialLanguageVariables() {
        this.formPlaceholders = this.placeholderHelperService.setSignUpPlaceholders();
    }

    ngOnInit() {
        this.setInitialLanguageVariables();
    }

}
