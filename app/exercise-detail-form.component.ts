import {Component, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {ControlGroup, Control} from "angular2/common";

@Component({
    selector: 'exercise-detail-form',
    template: `
    <div>
        <input type="text" class="form-control" [ngFormControl]="repsControl" ([ngModel])="reps" placeholder="Reps"/>
        <input type="text" class="form-control" [ngFormControl]="setsControl" ([ngModel])="sets" placeholder="Sets"/>
        <input type="text" class="form-control" [ngFormControl]="weightControl" ([ngModel])="weight" placeholder="Weight"/>
        <input type="text" class="form-control" [ngFormControl]="timeControl" placeholder="Time"/>
        <input type="hidden" class="form-control" [ngFormControl]="idControl" />
    </div>
    `,
    directives: []
})

export class ExerciseDetailFormComponent {
    repsControl = new Control();
    setsControl = new Control();
    weightControl = new Control();
    timeControl = new Control();
    idControl = new Control();

    @Input() exerciseDetailGroup;
    @Input() exerciseDetailId;
    ngOnInit() {
        this.exerciseDetailGroup.addControl("repControl", this.repsControl);
        this.exerciseDetailGroup.addControl("setsControl", this.setsControl);
        this.exerciseDetailGroup.addControl("weightControl", this.weightControl);
        this.exerciseDetailGroup.addControl("timeControl", this.timeControl);
        this.exerciseDetailGroup.addControl("idControl", this.idControl);
        this.idControl.updateValue(this.exerciseDetailId);
    }

}