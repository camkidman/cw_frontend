import {Injectable} from "angular2/core";
import {Response} from "angular2/http";
import 'rxjs/add/operator/map';
import {HttpClient} from "./http.service";

@Injectable()
export class APIService {
    baseUrl:string;

    constructor(public http:HttpClient) {
        this.baseUrl = "api.calendarworkouts.dev/v1";
        this.http = http;
    }
    setHeaders(token) {
        this.http.setToken(token);
    }
    login(username, password) {
        //TODO: ACTUALLY ADD A REAL AUTHENTICATION SYSTEM
        return new Promise((resolve, reject) => {
            let creds = {username: username, pw: password};

            this.http.post(`${this.baseUrl}/auth/sign_in`, JSON.stringify(creds))
                .map(res => res.json())
                .subscribe((data, err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(data);
                    }
                })
        })
    }
}