export class Produit {
  id: number
  nom : string
  prix : number
  description: string

  constructor( valId: number, valNom: string, valPrix: number, valDescription: string){
    this.id = valId
    this.nom = valNom
    this.prix = valPrix
    this.description = valDescription
  }
}
