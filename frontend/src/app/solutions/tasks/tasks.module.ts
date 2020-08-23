import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskDetailsComponent } from './details/task-details.component';
import { TaskActionsComponent } from './actions/task-actions.component';
import { TaskService } from 'src/app/core/tasks/task.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelpersModule } from 'src/app/core/helpers/helpers.module';
import { TaskListComponent } from './list/task/task-list.component';
import { TasksSharedModule } from './shared/tasks-shared.module';
import { StoreModule } from '@ngrx/store';
import { tasksReducer } from './ngrx-state/tasks.reducer';
import { ActionListComponent } from './list/action/action-list.component';

@NgModule({
    declarations: [TasksComponent, TaskListComponent, TaskDetailsComponent, TaskActionsComponent, ActionListComponent],
    imports: [
        CommonModule,
        TasksRoutingModule,
        SharedModule,
        HelpersModule,
        TasksSharedModule,
        StoreModule.forFeature('tasks', tasksReducer)
    ],
    providers: [TaskService],
    exports: []
})

export class TasksModule { }
