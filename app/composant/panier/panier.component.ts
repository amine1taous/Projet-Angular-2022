import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produit } from 'src/app/classes/produit';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  public produits: any = [];
  public grandTotal!: number;
  number: number = 1;
  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.panierService.getproduits().subscribe((res) => {
      this.produits = res;
      this.grandTotal = this.panierService.getTotalPrix();
    });
  }
  removeItem(item: any) {
    this.panierService.removeCartItem(item);
  }
  emptycart() {
    this.panierService.removeAllCart();
  }
  plus() {
    this.number++;
  }
  moins() {
    if (this.number != 0) {
      this.number--;
    }
  }
}
