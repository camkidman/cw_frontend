import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {APIService} from "./api.service";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class UserService {
    private LOCAL_TOKEN_KEY:string;
    private authToken:string;
    isAuthenticated:boolean = false;
    user:any;
    isAdmin:boolean;

    constructor(private API: APIService, private router:Router) {
        this.LOCAL_TOKEN_KEY = "jwt";
        this.isAdmin = false;
        this.API.setHeaders(window.localStorage.getItem(this.LOCAL_TOKEN_KEY));
        this.getUser();
    }
    getUser() {
        let token = window.localStorage.getItem(this.LOCAL_TOKEN_KEY);
        if (token) {
            this.API.getUser(window.jwt_decode(token)._id).then((response) => {
                if (response && typeof response === "object") {
                    this.useCredentials(token, response.data);
                } else {
                    console.error("[Couldn't Get User] - " + response.data);
                }
            })
        }
    }
    storeUserCredentials(token) {
        window.localStorage.setItem(this.LOCAL_TOKEN_KEY, token);
        this.useCredentials(token);
    }
    useCredentials(token:string, user:any) {
        //--

        this.authToken = token;

        //...

        this.API.setHeaders(token);
    }
    login(username:string,password:string) {
        this.API.login(username, password).then((response) => {
            if (response.error) {
                window.Materialize.toast(response.message, 4000, 'loginError');
            } else {
                console.log(response);
                this.storeUserCredentials(response.token);
            }
        });
    }
    logout() {
        this.authToken = '';
        this.user = {};
        this.isAuthenticated = false;
        this.API.setHeaders('');
        window.localStorage.removeItem(this.LOCAL_TOKEN_KEY);
    }
}