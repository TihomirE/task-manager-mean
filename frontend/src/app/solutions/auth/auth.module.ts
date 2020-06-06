import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelpersModule } from 'src/app/core/helpers/helpers.module';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AuthComponent, LoginComponent, SignUpComponent],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        SharedModule,
        HelpersModule
    ],
    providers: [],
    exports: []
})

export class AuthModule { }
