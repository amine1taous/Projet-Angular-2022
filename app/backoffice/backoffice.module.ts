import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { MenuComponent } from './menu/menu.component';
import { InterfacesuperUserComponent } from './interfacesuper-user/interfacesuper-user.component';
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AcceuiladminComponent } from './acceuiladmin/acceuiladmin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent,
    InterfacesuperUserComponent,
    LoginComponent,
    DashboardAdminComponent,
    AcceuiladminComponent,
    
  ],
  imports: [CommonModule, BackofficeRoutingModule, ReactiveFormsModule],
})
export class BackofficeModule {}
