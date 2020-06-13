import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskDetailsComponent } from './details/task-details.component';
import { TaskActionsComponent } from './actions/task-actions.component';
import { TaskService } from 'src/app/core/tasks/task.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelpersModule } from 'src/app/core/helpers/helpers.module';
import { TaskListComponent } from './list/task-list.component';
import { TasksSharedModule } from './shared/tasks-shared.module';

@NgModule({
    declarations: [TasksComponent, TaskListComponent, TaskDetailsComponent, TaskActionsComponent],
    imports: [
        CommonModule,
        TasksRoutingModule,
        SharedModule,
        HelpersModule,
        TasksSharedModule
    ],
    providers: [TaskService],
    exports: []
})

export class TasksModule { }
