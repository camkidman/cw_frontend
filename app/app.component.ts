import {Component} from 'angular2/core';
import {UserService} from './services/user.service';
import {UserDashboardComponent} from './user-dashboard.component';

@Component({
  selector: 'cw-api-app',
  template: `
    <h1>{{title}}</h1>
    <div><p>Test!</p></div>
    <ul><li (click)="userFetch">Blah</li></ul>
    <div class="user-info">
      <cw-user-dashboard [user]="user"></cw-user-dashboard>
  `
  directives: [UserDashboardComponent],
  providers: [UserService]
})

export class AppComponent {
  public title = "Calendar Workouts";
  public user: Object;

  constructor(private _userService: UserService) { }

  userFetch() {
    this._userService.getUserDashboard().then(user => this.user = user) 
  }
}
