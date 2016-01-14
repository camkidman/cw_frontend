import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {ApiService} from './services/api.service';


@Component({
    selector: 'login-links',
    template: `
    <div *ngIf="!loggedIn()">
        <button (click)="apiService.login()">Login</button>
        <span>Or...</span>
        <div>

        </div>
    </div>
    <button *ngIf="loggedIn()" (click)="logout()">Logout</button>
    `,
    bindings: [ApiService],

})

export class LoginComponent {

    constructor(public apiService: ApiService) {

    }
}
