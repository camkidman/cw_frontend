System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DashboardWorkoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DashboardWorkoutComponent = (function () {
                function DashboardWorkoutComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DashboardWorkoutComponent.prototype, "workout", void 0);
                DashboardWorkoutComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard-workout',
                        template: "\n      <div class=\"col-md-6\">\n        {{workout}}\n        <ul *ngFor=\"#exercise_detail of workout.exercise_details\">\n          <h4>{{exercise_detail.exercise.name}}</h4>\n          <li>Reps: {{exercise_detail.reps}}</li>\n          <li>Sets: {{exercise_detail.sets}}</li>\n        </ul>\n      </div>\n\n      <hr />\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], DashboardWorkoutComponent);
                return DashboardWorkoutComponent;
            })();
            exports_1("DashboardWorkoutComponent", DashboardWorkoutComponent);
        }
    }
});
//# sourceMappingURL=dashboard-workout.component.js.map