import {Component, Input, OnInit} from '@angular/core';
import { ServerElement } from '../shared/server.types';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
   @Input('server') element: ServerElement;

  constructor() { }

  ngOnInit(): void {
  }

}
