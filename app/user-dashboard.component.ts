import {Component} from 'angular2/core';
import {HttpClient} from "./services/http.service";
import {APIService} from "./services/api.service";

@Component({
    selector: 'cw-user-dashboard',
    templateUrl: 'app/templates/user-dashboard.component.html',
    inputs: ['userDashboardJSON'],
    providers: [HttpClient, APIService],
})

export class UserDashboardComponent {
    http: HttpClient;
    userId:number;
    userDashboardJSON:Object;
    apiService:APIService;

    constructor(private _http:HttpClient, private _apiService:APIService) {
        this.userId = localStorage.getItem("user_id");
        this.http = _http;
        this.apiService = _apiService;
        console.log("user constructed");
        this.getUserDashboardData();
    }

    getUserDashboardData() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.apiService.baseUrl}/users/${this.userId}/dashboard`)
                .subscribe(
                    data => { console.log(data),
                        this.userDashboardJSON = data.json(),
                        console.log(this.userDashboardJSON)},
                    err => reject(err),
                    () => console.log("dashboard loaded!")
                );
        })
    }

}
