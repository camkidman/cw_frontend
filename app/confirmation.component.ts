import {Component, OnInit} from 'angular2/core';
import {APIService} from './services/api.service';
import {HttpClient} from './services/http.service';
import {Router, RouteParams} from 'angular2/router';


@Component({
    selector: 'confirmation-template',
    templateUrl: 'app/templates/confirmation.component.html',
    providers: [HttpClient, APIService],
})

export class ConfirmationComponent implements OnInit {
    data: string;
    confirmationToken: string;

    constructor(private _router:Router, private _routeParams:RouteParams, public http:HttpClient, public apiService:APIService) {
        this.http = http;
        this.apiService = apiService;
    }

    ngOnInit() {
        this.confirmationToken = this._routeParams.get("confirmation_token");
        this.fireConfirmation();
    }

    fireConfirmation() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.apiService.baseUrl}/auth/confirmation`, this.confirmationToken)
            .map(res => res.json())
            .subscribe((data, err) => {
                if (err) {
                    reject(err)
                } else {
                    // TODO: update the template to show the confirmation on success
                    resolve(data);
                }
            })
        })
    }
}
