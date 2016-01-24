import {Injectable} from "angular2/core";
import {Response} from "angular2/http";
import 'rxjs/add/operator/map';
import {HttpClient} from "./http.service";
import {Headers} from "angular2/http";
import {error} from "util";

@Injectable()
export class APIService {
    baseUrl:string;
    email:string;
    password:string;
    passwordConfirmation:string;
    responseData:Response;
    jsonResponseBody:any;

    constructor(public http:HttpClient) {
        this.baseUrl = "http://localhost:3009";
        this.http = http;
    }

    register(email, password, passwordConfirmation) {
        //TODO: ACTUALLY ADD A REAL AUTHENTICATION SYSTEM
        return new Promise((resolve, reject) => {
            let creds = {email: email, password: password, password_confirmation: passwordConfirmation};

            this.http.post(`${this.baseUrl}/auth`, JSON.stringify(creds))
                .subscribe(
                    data => console.log(data),
                    err => reject(err),
                    () => console.log("woot"));
        })
    }

    login(email, password) {
        //TODO: ACTUALLY ADD A REAL AUTHENTICATION SYSTEM
        return new Promise((resolve, reject) => {
            let creds = {email: email, password: password};

            this.http.post(`${this.baseUrl}/auth/sign_in`, JSON.stringify(creds))
                .subscribe(
                    data => { this.responseData = data,
                        localStorage.setItem("Client", this.responseData.headers.get("Client")),
                        localStorage.setItem("Access-Token", this.responseData.headers.get("Access-Token")),
                        this.jsonResponseBody = this.responseData.json(),
                        localStorage.setItem("user_id", this.jsonResponseBody.data.id)},
                err => reject(err),
                () => console.log("logged in!")
            );
        })
    }

    logout() {
        return new Promise((resolve, reject) => {
            this.http.delete(`${this.baseUrl}/auth/sign_out`)
                .subscribe(
                    data => { console.log("signed out!"),
                    localStorage.removeItem("Client"),
                    localStorage.removeItem("Access-Token")},
                    err => reject(err),
                    () => console.log("finished signing out")
                );
        })
    }
}