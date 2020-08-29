import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  onNumberGiven(givenNumber: number): void {
    givenNumber % 2 === 0 ? this.evenNumbers.push(givenNumber) : this.oddNumbers.push(givenNumber);
  }

  onNumbersReset(): void {
    this.evenNumbers = [];
    this.oddNumbers = [];
  }
}
