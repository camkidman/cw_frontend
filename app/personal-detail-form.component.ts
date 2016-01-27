import {Component, Input} from 'angular2/core';
import {Http} from 'angular2/http';
import {APIService} from './services/api.service';
import {HttpClient} from './services/http.service';
import {NgForm} from 'angular2/common';
import {FORM_DIRECTIVES, CORE_DIRECTIVES, FormBuilder, Validators} from "angular2/common";

@Component({
    selector: 'personal-detail-form',
    templateUrl: 'app/templates/forms/personal-detail-form.component.html',
    providers: [HttpClient, APIService],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    inputs: ['date']
})

export class PersonalDetailFormComponent {
    form;
    data:string;
    userId:number;

    constructor(public apiService:APIService, public http:HttpClient, fb:FormBuilder) {
        this.userId = localStorage.getItem("user_id");
        this.form = fb.group({"prop1": ["", Validators.required]});
    }

    onSubmit(data) {
        return new Promise((resolve, reject) => {
            var date = new Date();
            var yyyy = date.getFullYear();
            var mm = date.getMonth();
            var dd = date.getDate();
            data.date = yyyy + "-" + dd + "-" + mm;
            let personalDetailParams = {"personal_detail": data};
            console.log(personalDetailParams);
            this.http.post(`${this.apiService.baseUrl}/users/${this.userId}/personal_details`, JSON.stringify(personalDetailParams))
                .subscribe(
                    data => { console.log("personal detail created, biotch!")},
                    err => reject(err),
                    () => console.log("finished creating personal detail")
                );
        })
    }
}