import {Injectable} from 'angular2/core';

@Injectable()

export class UserService {
  url: string;
  constructor() {
    this.url = "api.calendarworkouts.dev/";
  }
  getUserDashboard() {
    return Promise.resolve(
        http.get("/users/1").subscribe(res => {
          this.people = res.json();
        });
    )
  }
}
