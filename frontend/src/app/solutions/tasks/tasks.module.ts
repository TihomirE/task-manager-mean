import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
    declarations: [TasksComponent],
    imports: [
        CommonModule,
        TasksRoutingModule
    ],
    providers: []
})

export class TasksModule { }
