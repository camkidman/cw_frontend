import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class UserService {
  url: string;
  constructor(http: Http) {
    this.url = "http://api.calendarworkouts.dev/";
    this.http = http
  }

  getUserDashboard() {
    return this.http.get(this.url + "users/1/dashboard")
      .map((responseData) => {
        return responseData.json();
       });
  }
}
