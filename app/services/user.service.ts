import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class UserService {
  url: string;
  constructor(http: Http) {
    this.url = "api.calendarworkouts.dev/";
    this.http = http
  }

  getUserDashboard() {
    return Promise.resolve(
      this.http.get(this.url + "/users/1").map(res => res.json())
    )
  }
}
