import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
})
export class AcceuilComponent implements OnInit {
  constructor() {}
  compteurImage = 1;
  totalImage = 6;
  mySource = 'assets/corona1.jpg';

  silder(x: any) {
    this.compteurImage = this.compteurImage + x;
    this.mySource = 'assets/corona' + this.compteurImage + '.jpg';
    if (this.compteurImage >= this.totalImage) {
      this.compteurImage = 1;
    }
    if (this.compteurImage < 1) {
      this.compteurImage = this.totalImage;
    }
  }

  ngOnInit(): void {}
  search(chaine: any) {
    console.log(chaine); 
  }
}
