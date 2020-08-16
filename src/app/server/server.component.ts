import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: [ './server.component.css' ]
})
export class ServerComponent {
  @Input() id: number;
  @Input() name: string;
  @Input() status: string;
  constructor () {
  }

  toggleStatus (): void {
    this.status = this.status === 'online' ? 'offline' : 'online';
  }

  isOnline (): boolean {
    return this.status === 'online';
  }
}
