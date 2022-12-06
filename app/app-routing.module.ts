import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafeComponent } from './frontoffice/categories/cafe/cafe.component';
import { CharcuterieComponent } from './frontoffice/categories/charcuterie/charcuterie.component';
import { ConserveComponent } from './frontoffice/categories/conserve/conserve.component';
import { FromageComponent } from './frontoffice/categories/fromage/fromage.component';
import { FruitsecComponent } from './frontoffice/categories/fruitsec/fruitsec.component';
import { PatisserieComponent } from './frontoffice/categories/patisserie/patisserie.component';
import { AcceuilComponent } from './composant/acceuil/acceuil.component';
import { AproposComponent } from './composant/apropos/apropos.component';
import { ContactComponent } from './composant/contact/contact.component';
import { ErreurComponent } from './composant/erreur/erreur.component';
import { ListproduitComponent } from './composant/listproduit/ListproduitComponent';
import { LoginComponent } from './backoffice/login/login.component';
// import { LivraisonComponent } from './composant/livraison/livraison.component';
import { PanierComponent } from './composant/panier/panier.component';
import { ProduitComponent } from './composant/produit/produit.component';
import { PromotionComponent } from './composant/promotion/promotion.component';

const routes: Routes = [
  { path: 'acceuil', title: 'Acceuil', component: AcceuilComponent },
  { path: 'listproduit', title: 'liste de produits', component: ListproduitComponent },
  {path: 'promotion', title: 'promotion', component:PromotionComponent},
  {
    path: 'charcuterie',
    title: 'charcuterie',
    component: CharcuterieComponent,
  },
  { path: 'patisserie', title: 'patisserie', component: PatisserieComponent },
  { path: 'fruit sec', title: 'sec', component: FruitsecComponent },
  { path: 'conserve', title: 'conserve', component: ConserveComponent },
  { path: 'cafe', title: 'cafe', component: CafeComponent },
  { path: 'fromage', title: 'fromage', component: FromageComponent },

  // { path: 'livraison', title: "Livraison", component: LivraisonComponent },
  { path: 'Contacte', title: 'Contact', component: ContactComponent },

  { path: 'produit/:id', title: 'Produit choisi', component: ProduitComponent },
  { path: 'panier', title: 'Panier', component: PanierComponent },
  { path: 'Apropos', title: 'About us', component: AproposComponent },
  // ajouter ici
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
  { path: '**', title: 'erreur', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
