import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-interfacesuper-user',
  templateUrl: './interfacesuper-user.component.html',
  styleUrls: ['./interfacesuper-user.component.css'],
})
export class InterfacesuperUserComponent implements OnInit {
  constructor(
    private produitService: ProduitService,
    private fb: FormBuilder
  ) {}
  produitForm!: FormGroup;
  pr!: Produit[];
  lesProduits$!: Observable<Produit[]>;
  produit!: Produit;
  ngOnInit(): void {
    this.produitForm = this.fb.nonNullable.group({
      libelle: [''],
      prix: [0],
      marque: [''],
      categorie: [''],
      date: [''],
      image: [''],
      quantite: [''],
      disponibilite: [''],
    });
    this.produitService.getProduits().subscribe((data) => (this.pr = data));
    this.lesProduits$ = this.produitService.getProduits();
  }
  ajouter() {
    this.produitService
      .addproduit(this.produitForm.value)
      .subscribe((data) => this.pr.push(data));
  }
  supprimer(produit: Produit) {
    this.produitService
      .supProduit(produit.id)
      .subscribe(
        (data) => (this.pr = this.pr.filter((e) => e.id != produit.id))
      );
  }
  onmodif(produit: Produit) {
    this.produit = produit;
  }
  modifier(produit: Produit) {
    this.produitService
      .modifproduit(this.produitForm.value, produit.id)
      .subscribe((data) => console.log(data));
  }
}
