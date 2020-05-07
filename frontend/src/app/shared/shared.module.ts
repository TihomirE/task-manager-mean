import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [MainLayoutComponent, NavbarComponent, FooterComponent],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ],
    providers: [],
    exports: [MainLayoutComponent, NavbarComponent, FooterComponent, TranslatePipe
    ]
})

export class SharedModule { }
