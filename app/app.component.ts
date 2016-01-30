import {Component} from 'angular2/core';
import {UserService} from './services/user.service';
import {LoginFormComponent} from './login-form.component';
import {APIService} from './services/api.service';
import {HttpClient} from "./services/http.service";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {RegistrationComponent} from './registration.component';
import {ConfirmationComponent} from './confirmation.component';
import {UserDashboardComponent} from './user-dashboard.component';
import {PersonalDetailFormComponent} from "./personal-detail-form.component";
import {InitialTestFormComponent} from "./initial-test-form.component";

@Component({
  selector: 'cw-api-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['SignUp']">Register</a>
      <a [routerLink]="['Login']">Log In</a>
      <a (click)="logout()" href="#">Log Out</a>
      <a [routerLink]="['UserDashboard']">Dashboard</a>
      <a [routerLink]="['PersonalDetailForm']">Update Personal Details</a>
      <a [routerLink]="['InitialTestForm']">Complete your initial test!</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [UserDashboardComponent, LoginFormComponent, RegistrationComponent, ROUTER_DIRECTIVES],
  providers: [UserService, APIService, HttpClient]
})

@RouteConfig([
  {path:'/sign_up', name: 'SignUp', component: RegistrationComponent},
  {path:'/login', name: 'Login', component: LoginFormComponent},
  {path:'/confirm_registration', name: 'ConfirmRegistration', component: ConfirmationComponent},
  {path:'/dashboard', name: 'UserDashboard', component: UserDashboardComponent},
  {path:'/update_personal_details', name: 'PersonalDetailForm', component: PersonalDetailFormComponent},
  {path:'/initial_test_form', name: 'InitialTestForm', component: InitialTestFormComponent}
])

export class AppComponent {
  public title = "Calendar Workouts";
  public user: Object;
  apiService: APIService;

  constructor(private _userService: UserService, private _apiService:APIService) {
    this.apiService = _apiService;
  }

  logout() {
    console.log("call logout");
    this.apiService.logout();
  }
}
