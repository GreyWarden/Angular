import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
    this.allowServerCreation();
  }

  isServerCreationAllowed = false;
  isServerCreated = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  ngOnInit (): void {
  }

  onCreateServer (): void {
    this.allowServerCreation();
    this.isServerCreationAllowed = false;
    this.isServerCreated = true;
    this.serverCreationStatus = 'Server was created';
  }

  allowServerCreation (): void {
    setTimeout(() => {
      this.isServerCreationAllowed = true;
      this.isServerCreated = false;
      this.serverName = '';
    }, 2000);
  }
}
