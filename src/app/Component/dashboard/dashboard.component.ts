import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedComponent: string = '';

  loadComponent(component: string): void {
    this.selectedComponent = component;
  }
}
