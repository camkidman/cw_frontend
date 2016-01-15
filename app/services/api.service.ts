import {Injectable} from "angular2/core";
import {Response} from "angular2/http";
import 'rxjs/add/operator/map';
import {HttpClient} from "./http.service";

@Injectable()
export class APIService {
    baseUrl:string;

    constructor(public http:HttpClient) {
        this.baseUrl = "http://localhost:3008";
        this.http = http;
    }
    setHeaders(token) {
        this.http.setToken(token);
    }
    login(email, password) {
        //TODO: ACTUALLY ADD A REAL AUTHENTICATION SYSTEM
        return new Promise((resolve, reject) => {
            let creds = {email: email, pw: password};

            this.http.post(`${this.baseUrl}/auth/sign_in`, JSON.stringify(creds))
                .map(res => res.json())
                .subscribe((data, err) => {
                    if (err) {
                        console.log(data);
                        reject(err)
                    } else {
                        console.log(data);
                        resolve(data);
                    }
                })
        })
    }
}