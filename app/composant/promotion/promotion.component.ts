import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  lesProduitsPromo !: Observable<Produit[]>;
  constructor(private produitService:ProduitService ) { }

  ngOnInit(): void {
    this.lesProduitsPromo = this.produitService.getProduits();
  }

}
