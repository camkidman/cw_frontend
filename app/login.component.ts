import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';


@Component({
    selector: 'login-links',
    template: `
    <div *ngIf="!loggedIn()">
        <button (click)="login()">Login</button>
        <span>Or...</span>
        <div>

        </div>
    </div>
    <button *ngIf="loggedIn()" (click)="logout()">Logout</button>
    `

})

export class LoginComponent {
    public headerName: string;
    public headerPrefix: string;
    public tokenName = getCwTokenName();
    public tokenGetter = getCwAuthToken();
    private jwtHelper = new JwtHelper();

    constructor() {
        headerName = "application/vnd.calendarworkouts.v1";
        headerPrevis = "Accept";
    }

    authHeaderName() {
        this.headerName;
    }

    authHeaderPrefix() {
        this.headerPrefix;
    }

    //userFetch() {
    //    this._userService.getUserDashboard().subscribe(res => this.user = res);
    //}

    getCwAuthToken(): string {
        return this.jwtHelper.localStorage.getItem('access-token');
    }

    getCwTokenName(): string {
        return this.jwtHelper.localStorage.getItem('client');
    }

    loggedIn() {
        return tokenNotExpired();
    }

    logout() {

    }

    login() {

    }
}
