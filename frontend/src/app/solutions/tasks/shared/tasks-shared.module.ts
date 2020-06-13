import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NewTaskComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        NewTaskComponent
    ]
})

export class TasksSharedModule { }
