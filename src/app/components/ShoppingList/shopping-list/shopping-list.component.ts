import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../Shared/ingredients/Models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatico', 3, 'pieces'),
    new Ingredient('Aceite', 32, 'cl'),
    new Ingredient('Sal', 2, 'pinch')
  ];
  constructor () { }

  ngOnInit (): void {
  }

  onIngredientAdded (ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
