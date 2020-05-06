import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [MainLayoutComponent, NavbarComponent],
    imports: [
        CommonModule,
        RouterModule,
        // TranslateModule
    ],
    providers: [],
    exports: [MainLayoutComponent, NavbarComponent]
})

export class SharedModule { }
