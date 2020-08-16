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
  serverCreationStatus = 'No server was created';

  ngOnInit (): void {
  }

  onCreateServer (): void {
    this.isServerCreationAllowed = false;
    this.serverCreationStatus = 'Server was created';
    this.allowServerCreation();
  }

  allowServerCreation (): void {
    setTimeout(() => {
      this.isServerCreationAllowed = true;
      this.serverCreationStatus = 'No server was created';
    }, 2000);
  }
}
