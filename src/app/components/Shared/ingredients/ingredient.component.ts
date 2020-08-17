import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() name: string;
  @Input() amount: number;
  @Input() measurement: string;

  constructor () { }

  ngOnInit (): void {
  }

}
