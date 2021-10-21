import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/models/Produit.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  produits: Produit[]

  constructor() {
    this.produits = []
   }

  ngOnInit(): void {

    this.produits.push(
      new Produit(1, "Bananaaaaa", 2, "Je suis une super banane de type bananisé. C'est vraiment incroyable a quel point je suis jaune."),
      new Produit( 2, "Citron", 5, "Toi tu t'appeles Nathalie avec ta tête de moi.")
      )
  }
}
