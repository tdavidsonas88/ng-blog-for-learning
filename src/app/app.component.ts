import { Component } from '@angular/core';
// Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  currentVal = "";
  getVal(val)
  {
    console.warn(val);
    this.currentVal = val;
  }
  appName = 'blog app';
  name = 'bruce';
  myName = 'Tadas';
  getName(name){
    alert(name);
  }
  obj={
    name: 'Kelly',
    age: 20,
  }
  arr=['Bruce', 'Tonny', 'Peter'];
  siteUrl = window.location.href;

  myEvent(evt) {
    console.warn(evt);
  }
}
