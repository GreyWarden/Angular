import { Component, OnInit } from '@angular/core';
import {Server} from '../server/server.component.types';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: Server[];

  constructor () {
    this.allowServerCreation();
    this.servers = [
      {
        id: 1,
        name: 'First Server',
        status: 'offline'
      },
      {
        id: 2,
        name: 'Second Server',
        status: 'online'
      },
      {
        id: 3,
        name: 'First Server backup',
        status: 'online'
      }
    ];
  }

  isServerCreationAllowed = false;
  isServerCreated = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  nextId = 4;

  ngOnInit (): void {
  }

  onCreateServer (): void {
    this.isServerCreationAllowed = false;
    this.isServerCreated = true;
    this.serverCreationStatus = 'Server was created';
    this.servers.push({
      id: this.nextId++,
      name: this.serverName,
      status: 'online'
    });
    this.allowServerCreation();
  }

  allowServerCreation (): void {
    setTimeout(() => {
      this.isServerCreationAllowed = true;
      this.isServerCreated = false;
      this.serverName = '';
    }, 2000);
  }
}
