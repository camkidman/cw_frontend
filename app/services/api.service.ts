import {Injectable} from "angular2/core";
import {Response} from "angular2/http";
import 'rxjs/add/operator/map';
import {HttpClient} from "./http.service";

@Injectable()
export class APIService {
    baseUrl:string;
    email:string;
    password:string;
    passwordConfirmation:string;

    constructor(public http:HttpClient) {
        this.baseUrl = "http://localhost:3009";
        this.http = http;
    }
    setHeaders(token) {
        this.http.setToken(token);
    }
    login(email, password, passwordConfirmation) {
        //TODO: ACTUALLY ADD A REAL AUTHENTICATION SYSTEM
        return new Promise((resolve, reject) => {
            let creds = {email: email, password: password, password_confirmation: passwordConfirmation, confirm_success_url: "https://google.com"};

            this.http.post(`${this.baseUrl}/auth`, JSON.stringify(creds))
                .map(res => res.json())
                .subscribe((data, err) => {
                    if (err) {
                        reject(err)
                    } else {
                        console.log(data);
                        resolve(data);
                    }
                })
        })
    }
}