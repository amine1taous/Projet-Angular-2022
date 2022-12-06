import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErreurComponent } from '../composant/erreur/erreur.component';
import { AcceuilComponent } from '../composant/acceuil/acceuil.component';
import { AproposComponent } from '../composant/apropos/apropos.component';
import { FruitsecComponent } from './categories/fruitsec/fruitsec.component';
import { PatisserieComponent } from './categories/patisserie/patisserie.component';
import { ListproduitComponent } from '../composant/listproduit/ListproduitComponent';
import { PromotionComponent } from '../composant/promotion/promotion.component';

const routes: Routes = [
  {
    path: 'acceuil', children: [
      // { path: '', component: AcceuilComponent },
      // { path: 'promo', component: PromotionComponent },
      // { path: 'apropos', component: AproposComponent },
      // { path: 'ListProduits', component: ListproduitComponent },
      // { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
      // { path: '**', title: 'erreur', component: ErreurComponent },
      // { path: 'patisserie', title: 'Patisserie', component: PatisserieComponent },
      // {path:'fruit_sec',title:'Fruit Sec',component:FruitsecComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
