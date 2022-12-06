import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/classes/produit';
import { PanierService } from 'src/app/service/panier.service';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  idProduit!: number;
  produit!: Produit;
  CommentaireForm!: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public service: ProduitService,
    public service2: PanierService
  ) {}

  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.params['id'];
    this.service
      .getproduitbyid(this.idProduit)
      .subscribe((data) => (this.produit = data));
    this.crateForm();
  }
  crateForm() {
    this.CommentaireForm = this.fb.nonNullable.group({
      commentaire: this.fb.array([]),
    });
  }
  get lescommentaire() {
    return this.CommentaireForm.get('commentaire') as FormArray;
  }

  add() {
    this.service2.addtoCart(this.produit);
  }
  ajouterAcc() {
    this.service
      .ajouterCom(this.CommentaireForm.value, this.idProduit)
      .subscribe((data) => this.lescommentaire.push(data));
    alert('true');
  }
  ajouterDiplome() {
    this.lescommentaire.push(
      this.fb.group({
        name: [''],
        description: [''],
      })
    );
  }
}
