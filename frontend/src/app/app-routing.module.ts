import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { TasksComponent } from './solutions/tasks/tasks.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'app', pathMatch: 'full' },
      { path: 'app', loadChildren: './solutions/tasks/tasks.module#TasksModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
