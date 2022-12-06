import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from '../composant/acceuil/acceuil.component';
import { ErreurComponent } from '../composant/erreur/erreur.component';
import { AcceuiladminComponent } from './acceuiladmin/acceuiladmin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { InterfacesuperUserComponent } from './interfacesuper-user/interfacesuper-user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  // { path: 'admin', component: LoginComponent },
  {
    path: 'admin', children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
    {
      path: 'dash', component: DashboardAdminComponent,
      children: [
          { path: 'acceuil', component: AcceuiladminComponent },
          { path: 'listProduits', component: InterfacesuperUserComponent },
        { path: 'logout', component:LoginComponent}
        ]
      },
      // {
      //   path: '', children: [
      //     { path: 'dashboard', component:DashboardAdminComponent },
      //     { path: 'produits', component: InterfacesuperUserComponent },
      //     {path:'',redirectTo:'dashboard',pathMatch:'full'}
      // ]},
      // {path:'ListeProduit',component:InterfacesuperUserComponent},
      // { path: '**', component: ErreurComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
