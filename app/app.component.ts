import {Component} from 'angular2/core';
import {UserService} from './services/user.service';
import {UserDashboardComponent} from './user-dashboard.component';
import {LoginFormComponent} from './login-form.component';
import {APIService} from './services/api.service';
import {HttpClient} from "./services/http.service";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {RegistrationComponent} from './registration.component';

@Component({
  selector: 'cw-api-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['SignUp']">Register</a>
      <a [routerLink]="['Login']">Log In</a>
    </nav>
    <router-outlet></router-outlet>
    <ul><li (click)="userFetch(event)">Blah</li></ul>
    <div class="user-info">
      <cw-user-dashboard [user]="user"></cw-user-dashboard>
    </div>
  `,
  directives: [UserDashboardComponent, LoginFormComponent, RegistrationComponent, ROUTER_DIRECTIVES],
  providers: [UserService, APIService, HttpClient]
})

@RouteConfig([
  {path:'/sign_up', name: 'SignUp', component: RegistrationComponent},
  {path:'/login', name: 'Login', component: LoginFormComponent}
])

export class AppComponent {
  public title = "Calendar Workouts";
  public user: Object;

  constructor(private _userService: UserService) { }

  //userFetch() {
  //  console.log("wtf");
  //  this._userService.getUserDashboard().subscribe(res => this.user = res);
  //}
}
