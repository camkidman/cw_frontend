import {Component} from 'angular2/core';
import {HttpClient} from "./services/http.service";
import {APIService} from "./services/api.service";

@Component({
    selector: 'cw-user-dashboard',
    templateUrl: 'app/templates/user-dashboard.component.html',
    inputs: ['userDashboardJSON', 'goals', 'user'],
    providers: [HttpClient, APIService],
})

export class UserDashboardComponent {
    http: HttpClient;
    userId:number;
    public userDashboardJSON:any;
    apiService:APIService;
    goals:Array<Object>;
    personalDetails:Array<Object>;
    workouts:Array<Object>;
    user:Object;

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
                        this.goals = this.userDashboardJSON.goals,
                        this.personalDetails = this.userDashboardJSON.personal_details,
                        this.workouts = this.userDashboardJSON.workouts,
                        this.user = this.userDashboardJSON,
                        console.log(this.userDashboardJSON)},
                    err => reject(err),
                    () => console.log("dashboard loaded!")
                );
        })
    }
}
