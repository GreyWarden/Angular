import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  id = 1;
  status: string;

   constructor () {
     this.status = Math.random() > 0.5 ? 'online' : 'offline';
   }

   isOnline (): boolean {
     return this.status === 'online';
   }
}
