import {Component, Input} from 'angular2/core';
import {Http} from 'angular2/http';
import {APIService} from './services/api.service';
import {HttpClient} from './services/http.service';
import {NgForm} from 'angular2/common';
import {FORM_DIRECTIVES, CORE_DIRECTIVES, FormBuilder, Validators} from "angular2/common";

@Component({
    selector: 'initial-test-form',
    templateUrl: 'app/templates/forms/initial-test-form.component.html',
    providers: [HttpClient, APIService],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
})

export class InitialTestFormComponent {
    form;
    data:string;
    userId:number;
    initialTestData:any;
    initialTestWorkouts:any;
    initialTestExercises:any;
    initialTestExerciseDetails:any;

    constructor(public apiService:APIService, public http:HttpClient, fb:FormBuilder) {
        this.userId = localStorage.getItem("user_id");
        this.getInitialTest();
        this.form = fb.group({"prop1": ["", Validators.required]});
    }

    getInitialTest() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.apiService.baseUrl}/users/${this.userId}/initial_test`)
                .subscribe(
                    data => { this.initialTestData = data.json(),
                        console.log(this.initialTestData.initial_test),
                        this.initialTestWorkouts = this.initialTestData.initial_test.workouts,
                        this.initialTestExerciseDetails = this.initialTestWorkouts[0].exercise_details,
                        this.initialTestExercises = this.initialTestWorkouts[0].exercises,
                        console.log(this.initialTestExercises)
                        },
                    err => reject(err),
                    () => console.log("got the initial test!")
                );
        })
    }

    onSubmit(data) {
        return new Promise((resolve, reject) => {
            let initialTestParams = {workout: data};
            console.log(initialTestParams);
            this.http.patch(`${this.apiService.baseUrl}/users/${this.userId}/workouts/${this.initialTestWorkouts[0].id}`, JSON.stringify(initialTestParams))
                .subscribe(
                    data => { console.log("personal detail created, biotch!")},
                    err => reject(err),
                    () => console.log("finished creating personal detail")
                );
        })
    }
}