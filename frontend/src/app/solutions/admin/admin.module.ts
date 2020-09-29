import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UserAdminComponent } from './user/user-admin.component';

@NgModule({
    declarations: [AdminComponent, UserAdminComponent],
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    providers: [],
    exports: []
})

export class AdminModule { }
