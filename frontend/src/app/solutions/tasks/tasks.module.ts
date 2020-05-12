import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskDetailsComponent } from './details/task-details.component';
import { TaskActionsComponent } from './actions/task-actions.component';
import { TaskService } from 'src/app/core/tasks/task.service';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelpersModule } from 'src/app/core/helpers/helpers.module';
import { NullStringLengthPipe } from 'src/app/core/helpers/pipes/nullStringLength.pipe';

@NgModule({
    declarations: [TasksComponent, TaskDetailsComponent, TaskActionsComponent],
    imports: [
        CommonModule,
        TasksRoutingModule,
        SharedModule,
        HelpersModule
    ],
    providers: [TaskService],
    exports: []
})

export class TasksModule { }
