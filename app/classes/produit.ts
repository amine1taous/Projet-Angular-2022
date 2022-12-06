import { Commentaire } from './commentaire';

export class Produit {

  constructor(
    public id: number,
    public libelle: string,
    public description: string,
    public image: string,
    public prix: number,
    public disponibilite: boolean,
    public dateFabrication: Date,
    public categorie: string,
    public quantite: number,
    public promotion: boolean,
    public commentaire?: Commentaire[]
  ) {}
}
