import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { UserAdminComponent } from './user/user-admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      // TODO - add user id to routing
      { path: 'user', component: UserAdminComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
