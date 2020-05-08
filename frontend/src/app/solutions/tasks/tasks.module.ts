import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskDetailsComponent } from './details/task-details.component';
import { TaskActionsComponent } from './actions/task-actions.component';
import { TaskService } from 'src/app/core/tasks/task.service';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [TasksComponent, TaskDetailsComponent, TaskActionsComponent],
    imports: [
        CommonModule,
        TasksRoutingModule,
        SharedModule
    ],
    providers: [TaskService],
    exports: []
})

export class TasksModule { }
