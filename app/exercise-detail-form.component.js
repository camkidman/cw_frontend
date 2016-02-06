System.register(['angular2/core', "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var ExerciseDetailFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ExerciseDetailFormComponent = (function () {
                function ExerciseDetailFormComponent() {
                    this.repsControl = new common_1.Control();
                    this.setsControl = new common_1.Control();
                    this.weightControl = new common_1.Control();
                    this.timeControl = new common_1.Control();
                    this.idControl = new common_1.Control();
                }
                ExerciseDetailFormComponent.prototype.ngOnInit = function () {
                    this.exerciseDetailGroup.addControl("repControl", this.repsControl);
                    this.exerciseDetailGroup.addControl("setsControl", this.setsControl);
                    this.exerciseDetailGroup.addControl("weightControl", this.weightControl);
                    this.exerciseDetailGroup.addControl("timeControl", this.timeControl);
                    this.exerciseDetailGroup.addControl("idControl", this.idControl);
                    this.idControl.updateValue(this.exerciseDetailId);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExerciseDetailFormComponent.prototype, "exerciseDetailGroup", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExerciseDetailFormComponent.prototype, "exerciseDetailId", void 0);
                ExerciseDetailFormComponent = __decorate([
                    core_1.Component({
                        selector: 'exercise-detail-form',
                        template: "\n    <div>\n        <input type=\"text\" class=\"form-control\" [ngFormControl]=\"repsControl\" ([ngModel])=\"reps\" placeholder=\"Reps\"/>\n        <input type=\"text\" class=\"form-control\" [ngFormControl]=\"setsControl\" ([ngModel])=\"sets\" placeholder=\"Sets\"/>\n        <input type=\"text\" class=\"form-control\" [ngFormControl]=\"weightControl\" ([ngModel])=\"weight\" placeholder=\"Weight\"/>\n        <input type=\"text\" class=\"form-control\" [ngFormControl]=\"timeControl\" placeholder=\"Time\"/>\n        <input type=\"hidden\" class=\"form-control\" [ngFormControl]=\"idControl\" />\n    </div>\n    ",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExerciseDetailFormComponent);
                return ExerciseDetailFormComponent;
            })();
            exports_1("ExerciseDetailFormComponent", ExerciseDetailFormComponent);
        }
    }
});
//# sourceMappingURL=exercise-detail-form.component.js.map