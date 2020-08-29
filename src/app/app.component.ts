import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeTab: string;

  ngOnInit (): void {
    this.activeTab = 'recipes';
  }

  onTabChanged (tabName: string): void {
    this.activeTab = tabName;
  }
}
