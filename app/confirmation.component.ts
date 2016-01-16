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
    redirectURL: string;

    constructor(private _router:Router, private _routeParams:RouteParams, public http:HttpClient, public apiService:APIService) {
        this.http = http;
        this.apiService = apiService;
    }

    ngOnInit() {
        this.confirmationToken = this._routeParams.get("confirmation_token");
        this.redirectURL = this._routeParams.get("redirect_url");
        this.fireConfirmation(this.confirmationToken, this.redirectURL);
    }

    fireConfirmation(confirmationToken, redirectURL) {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.apiService.baseUrl}/auth/confirmation?config=default&confirmation_token=${confirmationToken}&redirect_url=${redirectURL}`)
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
