import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../Models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Salmorejo', 'Está to güeno, tt', 'https://www.eladerezo.com/wp-content/uploads/2008/08/salmorejo-cordobes-2048x1611.jpg'),
    new Recipe('Gaspashiro', 'Pues un gaspasho como dioh manda', 'https://recetaslife.com/wp-content/uploads/2016/01/receta-de-gazpacho-extremeno.jpg')
  ];

  constructor () { }

  ngOnInit (): void {
  }

  onRecipeSelected (recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
  }
}
