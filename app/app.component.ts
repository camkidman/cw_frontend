import {Component} from 'angular2/core';
import {UserService} from './services/user.service';
import {LoginComponent} from './login.component';
import {UserDashboardComponent} from './user-dashboard.component';

@Component({
  selector: 'cw-api-app',
  template: `
    <h1>{{title}}</h1>
    <div><p>Test!</p></div>
    <ul><li (click)="userFetch(event)">Blah</li></ul>
    <div class="user-info">
      <cw-user-dashboard [user]="user"></cw-user-dashboard>
    </div>
      <app-login></app-login>
  `
  directives: [UserDashboardComponent, LoginComponent],
  providers: [UserService]
})

export class AppComponent {
  public title = "Calendar Workouts";
  public user: Object;

  constructor(private _userService: UserService) { }

  userFetch() {
    console.log("wtf");
    this._userService.getUserDashboard().subscribe(res => this.user = res);
  }
}
