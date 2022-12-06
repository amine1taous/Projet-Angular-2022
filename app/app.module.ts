import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './composant/produit/produit.component';
import { AcceuilComponent } from './composant/acceuil/acceuil.component';
import { ErreurComponent } from './composant/erreur/erreur.component';
import { ListproduitComponent } from './composant/listproduit/ListproduitComponent';
import { AproposComponent } from './composant/apropos/apropos.component';
import { HeaderComponent } from './composant/header/header.component';
import { FooterComponent } from './composant/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
// import { LivraisonComponent } from './composant/livraison/livraison.component';
import { PromotionComponent } from './composant/promotion/promotion.component';
import { PrixPipe } from './pipe/prix.pipe';
import { ContactComponent } from './composant/contact/contact.component';
import { PanierComponent } from './composant/panier/panier.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FromageComponent } from './frontoffice/categories/fromage/fromage.component';
import { CafeComponent } from './frontoffice/categories/cafe/cafe.component';
import { PatisserieComponent } from './frontoffice/categories/patisserie/patisserie.component';
import { FruitsecComponent } from './frontoffice/categories/fruitsec/fruitsec.component';
import { ConserveComponent } from './frontoffice/categories/conserve/conserve.component';
import { CharcuterieComponent } from './frontoffice/categories/charcuterie/charcuterie.component';
import { BackofficeModule } from './backoffice/backoffice.module';
import { FrontofficeModule } from './frontoffice/frontoffice.module';
import { InterfacesuperUserComponent } from './backoffice/interfacesuper-user/interfacesuper-user.component';
import { ProduitService } from './service/produit.service';
import { RechercheComponent } from './composant/recherche/recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ErreurComponent,
    FromageComponent,
    CafeComponent,
    PatisserieComponent,
    FruitsecComponent,
    ConserveComponent,
    CharcuterieComponent,
    HeaderComponent,
    AcceuilComponent,
    AproposComponent,
    ContactComponent,
    ListproduitComponent,
    PanierComponent,
    PrixPipe,
    PromotionComponent,
    RechercheComponent,
  ],
  imports: [
    BrowserModule,
    BackofficeModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
