import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Injectable()

export class UserService {
  url: string;
  constructor() {
    this.url = "api.calendarworkouts.dev/";
  }
  getUserDashboard() {
    return Promise.resolve(
      http.get("/users/1").map(res => res.json())
    )
  }
}
