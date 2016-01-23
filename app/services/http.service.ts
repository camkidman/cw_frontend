import {Http, Headers} from 'angular2/http';
import {Injectable} from "angular2/core";
import {Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {RequestOptionsArgs} from "angular2/http";

@Injectable()
export class HttpClient {
    token:string;
    headers:any;
    clientHeader:Headers;
    constructor(public http:Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/vnd.calendarworkouts.v1');
        this.headers.append("Access-Control-Allow-Origin", "*");
        this.headers.append("Access-Control-Allow-Headers", "X-Requested-With", "Client", "Access-Token");
        this.headers.append("Access-Control-Allow-Methods", "GET, POST", "PUT", "DELETE");
        this.setAuthTokenIfAvailable();
        this.setClientHeaderIfAvailable();
    }
    setClientHeader(clientHeader) {
        this.clientHeader = clientHeader;
        console.log(this.clientHeader);
        this.headers.append('Client', this.clientHeader);
    }
    get(url: string, options?: RequestOptionsArgs) : Observable<Response> {
        return this.http.get(url, {headers: this.headers});
    }
    post(url: string, data: any, options?: RequestOptionsArgs) : Observable<Response> {
        return this.http.post(url, data, {headers: this.headers});
    }
    patch(url: string, data: any, options?: RequestOptionsArgs) : Observable<Response> {
        return this.http.patch(url, data, {headers: this.headers});
    }

    setAuthTokenIfAvailable() {
        if(localStorage.getItem("Access-Token") && !this.headers.get("Access-Token")) {
            this.headers.append("Access-Token", localStorage.getItem("Client"));
            console.log("access token is there");
        }
    }

    setClientHeaderIfAvailable() {
        if(localStorage.getItem("Client") && !this.headers.get("Client")) {
            this.headers.append("Client", localStorage.getItem("Client"));
            console.log("client is there");
        }
    }
}
