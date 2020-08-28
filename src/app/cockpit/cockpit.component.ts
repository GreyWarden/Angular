import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ServerElement} from '../shared/server.types';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<ServerElement>();
  newServerName: string;
  newServerContent: string;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(type: string): void {
    this.serverCreated.emit(this.createServerWithType(type));
    this.clearInputs();
  }

  private createServerWithType(type: string): ServerElement {
    return {
      type,
      name: this.newServerName,
      content: this.newServerContent
    };
  }

  private clearInputs(): void {
    this.newServerName = '';
    this.newServerContent = '';
  }
}
