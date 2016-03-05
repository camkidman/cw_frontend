import {Component, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {ControlGroup, Control} from "angular2/common";
import {APIService} from './services/api.service';
import {HttpClient} from './services/http.service';

@Component({
    selector: 'dashboard-workout',
    template: `
    <div class="col-md-6">
      <ul *ngFor="#exercise_detail of workout.exercise_details">
        <h4>{{exercise_detail.exercise.name}}</h4>
        <li *ngIf="exercise_detail.reps">Reps: {{exercise_detail.reps}}</li>
        <li *ngIf="exercise_detail.sets">Sets: {{exercise_detail.sets}}</li>
        <li *ngIf="exercise_detail.time">Time: {{exercise_detail.time}}</li>
        <li *ngIf="exercise_detail.weight">Weight: {{exercise_detail.weight}}</li>
      </ul>
      <form [ngFormModel]="singleWorkoutGroup" (ngSubmit)="onSubmit(singleWorkoutGroup.value)">
        <input type="hidden" class="form-control" [ngFormControl]="workoutIdControl" ([ngModel])="id" />
        <input type="hidden" class="form-control" [ngFormControl]="completeControl" ([ngModel])="complete" />
        <input type="submit" />
      </form>
    </div>

    <hr />
    `,
  directives: []
})

export class DashboardWorkoutComponent {
  singleWorkoutGroup = new ControlGroup({});
  completeControl = new Control();
  workoutIdControl = new Control();
  userId:number;

  @Input() workout;
  @Input() workoutControlGroup;
  
  constructor(public apiService:APIService, public http:HttpClient) {
        this.userId = localStorage.getItem("user_id");
    }

  ngOnInit() {
      this.singleWorkoutGroup.addControl("complete", this.completeControl);
      this.singleWorkoutGroup.addControl("id", this.workoutIdControl);
      this.workoutIdControl.updateValue(this.workout.id);
      this.completeControl.updateValue(1);
  }
  
  onSubmit(data) {
      return new Promise((resolve, reject) => {
            let workoutParams = {"workout": data};
            console.log(workoutParams);
            this.http.patch(`${this.apiService.baseUrl}/users/${this.userId}/workouts/${this.workout.id}`, JSON.stringify(workoutParams))
                .subscribe(
                    data => { console.log("workout is now complete!")},
                    err => reject(err),
                    () => console.log("workout submitted")
                );
        })
  }
}
