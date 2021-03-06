import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <h2>{{hero.name}} Details {{ hero.id }}</h2>
  <div><label>id: </label>{{hero.id}} </div>
  <div><label>name: </label>{{hero.name}} </div>
  <input [(ngModel)]="hero.name" placeholder="name">
  `, 
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes'
  hero : Hero = {
    id : 1,
    name: 'Windstorm'

  }
}

export class Hero {
  id: number
  name: String
}