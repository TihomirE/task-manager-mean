import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  {
    path: '', component: TasksComponent,
    // children: [
    //   { path: '', redirectTo: 'main', pathMatch: 'full' },
    //   { path: 'main', component: MainTasksComponent }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TasksRoutingModule { }
