import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css'],
})
export class ListproduitComponent implements OnInit {
  lesProduits$!: Observable<Produit[]>;
  num!: string;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.lesProduits$ = this.produitService.getProduits();
    this.num = 'ALL';
  }
  filtrerCategorie(event: any) {
    let value = event.target.value;
    if (value == 'fromage') {
      this.num = 'Fromage';
    } else if (value == 'cafe') {
      this.num = 'Cafe';
    } else if (value == 'Patisserie') {
      this.num = 'Patisserie';
    } else if (value == 'fruitsec') {
      this.num = 'Fruit Secs';
    } else if (value == 'conserve') {
      this.num = 'Conserve';
    } else if (value == 'charcuterie') {
      this.num = 'Charcuterie';
    } else if (value == 'ALL') {
      this.num = 'ALL';
    }
  }

  produitradiobutton: string = '';
  searchText: string = '';

  onSearchTextentered(searchvalue: string) {
    this.searchText = searchvalue;
    
  }
}
