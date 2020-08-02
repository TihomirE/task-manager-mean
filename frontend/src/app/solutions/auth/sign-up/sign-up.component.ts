import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlaceholderHelperService } from 'src/app/core/helpers/placeholder/placeholder-helper.service';

@Component({
    selector: 'app-sign-up-component',
    templateUrl: './sign-up.component.html'
})

// Reactive forms used here
export class SignUpComponent implements OnInit {

    signUpForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: [''],
        email: ['', Validators.required, Validators.email],
        password: ['', Validators.required],
        city: [''],
        phone: ['']
    });

    formPlaceholders = {} as {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        city: string,
        phone: string
    };

    constructor(private fb: FormBuilder, private placeholderHelperService: PlaceholderHelperService) { }

    onSubmit() {
        console.log('Form submited');
    }

    setInitialLanguageVariables() {
        this.formPlaceholders = this.placeholderHelperService.setSignUpPlaceholders();
    }

    ngOnInit() {
        this.setInitialLanguageVariables();
    }

}
