import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Ingredient} from '../../Shared/ingredients/Models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('measurementSelect') measurementSelect: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  options: string[];

  constructor () { }

  ngOnInit (): void {
    this.options = [
      'pinch(es)',
      'cl',
      'spoon(s)',
      'teaspoon(s)',
      'piece(s)'
    ];
  }

  /*
   *TODO: Implement validation and change way of getting the values for the ingredient
   * right now is using ViewChild as a way to practice
   */
  addIngredient (event: Event): void {
    event.preventDefault();
    this.ingredientAdded.emit(new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value,
      this.measurementSelect.nativeElement.value
    ));
  }
}
