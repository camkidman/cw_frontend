import {Http, Headers} from 'angular2/http';
import {Injectable} from "angular2/core";

@Injectable()
export class HttpClient {
    token:string = '';
    headers:any;
    constructor(public http:Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/vnd.calendarworkouts.v1');
        this.headers.append("Access-Control-Allow-Origin", "*");
        this.headers.append("Access-Control-Allow-Headers", "X-Requested-With");
        this.headers.append("Access-Control-Allow-Methods", "GET, POST", "PUT", "DELETE");
    }
    setToken(token) {
        this.token = token;
        console.log(this.token);
        this.headers.append('client', this.token);
    }
    get(url) {
        return this.http.get(url, {headers: this.headers});
    }
    post(url, data) {
        return this.http.post(url, data, {headers: this.headers});
    }
}
