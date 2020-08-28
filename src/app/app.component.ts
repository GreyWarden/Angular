import { Component } from '@angular/core';
import {ServerElement} from './shared/server.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElement[] = [
      {
        type: 'server',
        name: 'First server',
        content: 'First server content'
      },
      {
        type: 'blueprint',
        name: 'First Server Blueprint',
        content: 'First server content'
      }
    ];
}
