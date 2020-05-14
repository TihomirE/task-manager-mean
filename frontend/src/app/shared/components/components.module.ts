import { NewTaskBtnComponent } from './buttons/tasks/new-task-btn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { ShowActionsBtnComponent } from './buttons/tasks/show-actions-btn.component';
import { AuthNavbarBtnsComponent } from './buttons/navbar/auth-navbar-btns.component';

@NgModule({
    declarations: [
        NewTaskBtnComponent,
        ShowActionsBtnComponent,
        AuthNavbarBtnsComponent
    ],
    imports: [
        CommonModule,
        TranslateModule
    ],
    providers: [],
    exports: [
        TranslatePipe,
        NewTaskBtnComponent,
        ShowActionsBtnComponent,
        AuthNavbarBtnsComponent
    ]
})

export class ComponentsModule { }
