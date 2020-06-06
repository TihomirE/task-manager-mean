import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html'
})

// Template driven form used here
export class LoginComponent implements OnInit {

    email: string;
    password: string;

    constructor() { }

    login() {
        console.log(this.email + ' / ' + this.password);
    }

    ngOnInit() {

    }

}
