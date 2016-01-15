import {Component, Input} from 'angular2/core';
import {Http} from 'angular2/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {APIService} from './services/api.service';
import {HttpClient} from './services/http.service';
import {NgForm} from 'angular2/common';
import {FORM_DIRECTIVES, CORE_DIRECTIVES, FormBuilder, Validators} from "angular2/common";


@Component({
    selector: 'login-form',
    templateUrl: 'app/templates/forms/login-form.component.html',
    providers: [HttpClient, APIService],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class LoginFormComponent {
    data: string;
    form;

    constructor(public apiService: APIService, fb:FormBuilder) {
        this.form = fb.group({"prop1": ["", Validators.required]});
    }

    onSubmit(data) {
        this.data = data;
        console.log(this.data);
    }
}
