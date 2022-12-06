import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-patisserie',
  templateUrl: './patisserie.component.html',
  styleUrls: ['./patisserie.component.css']
})
export class PatisserieComponent implements OnInit {

  lesProduits$!: Observable<Produit[]>;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.lesProduits$ = this.produitService.getProduits();
  }

}
