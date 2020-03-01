import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [MainLayoutComponent, NavbarComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    exports: [MainLayoutComponent, NavbarComponent]
})

export class SharedModule { }
