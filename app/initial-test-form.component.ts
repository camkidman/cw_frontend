import {Component, Input} from 'angular2/core';
import {Http} from 'angular2/http';
import {APIService} from './services/api.service';
import {HttpClient} from './services/http.service';
import {NgForm} from 'angular2/common';
import {FORM_DIRECTIVES, CORE_DIRECTIVES, FormBuilder, Validators} from "angular2/common";
import {ControlGroup} from "angular2/common";
import {Control} from "angular2/common";
import {ExerciseDetailFormComponent} from "./exercise-detail-form.component";
import {ControlArray} from "angular2/common";

@Component({
    selector: 'initial-test-form',
    templateUrl: 'app/templates/forms/initial-test-form.component.html',
    providers: [HttpClient, APIService],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ExerciseDetailFormComponent],
})

export class InitialTestFormComponent {
    form;
    data:string;
    userId:number;
    initialTestData:any;
    initialTestWorkouts:any;
    initialTestExercises:any;
    initialTestExerciseDetails:any;
    exerciseDetailGroup = new ControlGroup({});

    constructor(public apiService:APIService, public http:HttpClient) {
        this.userId = localStorage.getItem("user_id");
        this.getInitialTest();
    }

    getInitialTest() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.apiService.baseUrl}/users/${this.userId}/initial_test`)
                .subscribe(
                    data => { this.initialTestData = data.json(),
                        this.initialTestWorkouts = this.initialTestData.initial_test.workouts,
                        console.log(this.initialTestData),
                        this.initialTestExerciseDetails = this.initialTestWorkouts[0].exercise_details
                        },
                    err => reject(err),
                    () => console.log("initial test loaded")
                );
        })
    }

    onSubmit(data) {
        return new Promise((resolve, reject) => {
            let exerciseDetails = data;
            let initialTestParams = {workout: {exercise_details_attributes: []}};
            for (var item in exerciseDetails) {
                if (exerciseDetails.hasOwnProperty(item)) {
                    initialTestParams.workout.exercise_details_attributes.push(exerciseDetails[item]);
                }
            }
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
