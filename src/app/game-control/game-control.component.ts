import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  isGameOn: boolean;
  intervalId: number;
  counter: number;
  @Output() numberGiven = new EventEmitter<number>();
  @Output() resetNumbers = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    this.isGameOn = false;
    this.counter = 0;
  }

  onStartGame(): void {
    this.isGameOn = true;
    this.intervalId = setInterval(
      () => this.numberGiven.emit(this.counter++),
      1000
    );
  }

  onFinishGame(): void {
    this.isGameOn = false;
    this.counter = 0;
    clearInterval(this.intervalId);
    this.resetNumbers.emit();
  }
}
