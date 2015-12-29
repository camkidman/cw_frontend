import {Component} from 'angular2/core';

@Component({
  selector: 'cw-api-app',
  template: `
    <h1>{{title}}</h1>
    <div><p>Test!</p></div>
  `
})

export class AppComponent {
  public title = "Calendar Workouts";

}
