import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewActionBtnComponent } from 'src/app/shared/components/buttons/tasks/new-action-button.component';
import { NewActionComponent } from './new-action/new-action.component';

@NgModule({
    declarations: [
        NewTaskComponent,
        NewActionComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        NewTaskComponent,
        NewActionComponent
    ]
})

export class TasksSharedModule { }
