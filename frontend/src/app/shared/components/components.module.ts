import { NewTaskBtnComponent } from './buttons/tasks/new-task-btn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { ShowActionsBtnComponent } from './buttons/tasks/show-actions-btn.component';
import { AuthNavbarBtnsComponent } from './buttons/navbar/auth-navbar-btns.component';
import { RouterModule } from '@angular/router';
import { SetCompletedBtnComponent } from './buttons/tasks/set-completed-btn.component';

@NgModule({
    declarations: [
        NewTaskBtnComponent,
        ShowActionsBtnComponent,
        AuthNavbarBtnsComponent,
        SetCompletedBtnComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule
    ],
    providers: [],
    exports: [
        TranslatePipe,
        NewTaskBtnComponent,
        ShowActionsBtnComponent,
        AuthNavbarBtnsComponent,
        SetCompletedBtnComponent
    ]
})

export class ComponentsModule { }
