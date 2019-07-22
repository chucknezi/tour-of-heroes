import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <h2>{{hero}} Details</h2>`, 
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes'
  hero = 'Windstorm'
}
