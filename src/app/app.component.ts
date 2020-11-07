import { Component } from '@angular/core';
// Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'blog app';
  name = 'bruce';
  getName(){
    return this.name;
  }
  obj={
    name: 'Kelly',
    age: 20,
  }
  arr=['Bruce', 'Tonny', 'Peter'];
  siteUrl = window.location.href;

}
