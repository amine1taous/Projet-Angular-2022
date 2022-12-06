import { Injectable } from '@angular/core';
import { Commentaire } from '../classes/commentaire';
import { Produit } from '../classes/produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const URL = 'http://localhost:3000/produits';
@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  listProduits!: Produit;
  constructor(private http: HttpClient) {}
  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(URL);
  }
  getproduitbyid(id: number): Observable<Produit> {
    return this.http.get<Produit>(URL + '/' + id);
  }
  addproduit(p: Produit): Observable<Produit> {
    return this.http.post<Produit>(URL, p);
  }
  supProduit(id: number) {
    return this.http.delete(URL + '/' + id);
  }
  modifproduit(produit: Produit, id: number): Observable<Produit> {
    return this.http.put<Produit>(URL + '/' + id, produit);
  }
  ajouterCom(
    commentaire: Commentaire[],
    id: number
  ): Observable<Commentaire[]> {
    return this.http.patch<Commentaire[]>(URL + '/' + id, commentaire);
  }
}
