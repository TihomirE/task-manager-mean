import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { TasksComponent } from './solutions/tasks/tasks.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'app', pathMatch: 'full' },
      { path: 'app', loadChildren: () => import('./solutions/tasks/tasks.module').then(m => m.TasksModule) },
      { path: 'language', loadChildren: () => import('./solutions/language/language-change.module').then(m => m.LanguageChangeModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
