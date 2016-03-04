import {Component, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';

@Component({
    selector: 'dashboard-workout',
    template: `
      <div class="col-md-6">
        {{workout}}
        <ul *ngFor="#exercise_detail of workout.exercise_details">
          <h4>{{exercise_detail.exercise.name}}</h4>
          <li>Reps: {{exercise_detail.reps}}</li>
          <li>Sets: {{exercise_detail.sets}}</li>
        </ul>
      </div>

      <hr />
  `
})

export class DashboardWorkoutComponent {

  @Input() workout:any;
}
