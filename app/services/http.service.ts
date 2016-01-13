import {Http, Headers} from 'angular2/http';
import {Injectable} from "angular2/core";

@Injectable()
export class HttpClient {
    token:string = '';
    headers:any;
    constructor(public http:Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    setToken(token) {
        this.token = token;
        this.headers.append('x-auth-token', this.token);
    }
    get(url) {
        return this.http.get(url, {headers: this.headers});
    }
    post(url, data) {
        return this.http.post(url, data, {headers: this.headers});
    }
}
