import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-up-component',
    templateUrl: './sign-up.component.html'
})

// Reactive forms used here
export class SignUpComponent implements OnInit {

    signUpForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: [''],
        email: ['', Validators.required],
        password: ['', Validators.required],
        city: [''],
        phone: ['']
    });

    constructor(private fb: FormBuilder) { }

    onSubmit() {
        console.log('Form submited');
    }

    ngOnInit() {

    }

}
