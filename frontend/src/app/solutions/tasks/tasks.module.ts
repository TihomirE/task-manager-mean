import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskDetailsComponent } from './details/task-details.component';
import { TaskActionsComponent } from './actions/task-actions.component';

@NgModule({
    declarations: [TasksComponent, TaskDetailsComponent, TaskActionsComponent],
    imports: [
        CommonModule,
        TasksRoutingModule
    ],
    providers: []
})

export class TasksModule { }
