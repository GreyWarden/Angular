import { Component, OnInit } from '@angular/core';
import {ServerElement} from '../shared/server.types';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName: string;
  newServerContent: string;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(): void {
    // this.serverElements.push(this.createServerWithType('server'));
    this.clearInputs();
  }

  onAddBlueprint(): void {
    // this.serverElements.push(this.createServerWithType('blueprint'));
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
