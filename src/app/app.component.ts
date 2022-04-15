import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cookbook';
  loadedFeature: 'project';
  onNavigate(feature) {
    this.loadedFeature = feature;
  }
}
