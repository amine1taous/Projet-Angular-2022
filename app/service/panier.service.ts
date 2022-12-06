import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produit } from '../classes/produit';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public produitListe = new BehaviorSubject<Produit[]>([]);
  public search = new BehaviorSubject<string>('');
  Quantitetotal = 0;
  panierList: any;

  cartItemList: Produit[] = [];
  constructor() {}
  getproduits() {
    return this.produitListe.asObservable();
  }
  setProduit(produit: any) {
    this.panierList.push(...produit);
    this.produitListe.next(produit);
  }

  getTotalPrix(): number {
    let prixtotal = 0;
    console.log(this.cartItemList);
    this.cartItemList.forEach((element) => {
      prixtotal += element.prix;
    });

    return prixtotal;
  }

  addtoCart(produit: any) {
    this.cartItemList.push(produit);
    this.produitListe.next(this.cartItemList);
    this.getTotalPrix();
  }
  removeCartItem(produit: Produit) {
    this.cartItemList.map((a: Produit, index: any) => {
      if (produit.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.produitListe.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.produitListe.next(this.cartItemList);
  }
}
