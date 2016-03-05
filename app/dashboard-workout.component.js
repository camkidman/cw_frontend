System.register(['angular2/core', "angular2/common", './services/api.service', './services/http.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, api_service_1, http_service_1;
    var DashboardWorkoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            DashboardWorkoutComponent = (function () {
                function DashboardWorkoutComponent(apiService, http) {
                    this.apiService = apiService;
                    this.http = http;
                    this.singleWorkoutGroup = new common_1.ControlGroup({});
                    this.completeControl = new common_1.Control();
                    this.workoutIdControl = new common_1.Control();
                    this.userId = localStorage.getItem("user_id");
                }
                DashboardWorkoutComponent.prototype.ngOnInit = function () {
                    this.singleWorkoutGroup.addControl("complete", this.completeControl);
                    this.singleWorkoutGroup.addControl("id", this.workoutIdControl);
                    this.workoutIdControl.updateValue(this.workout.id);
                    this.completeControl.updateValue(1);
                };
                DashboardWorkoutComponent.prototype.onSubmit = function (data) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var workoutParams = { "workout": data };
                        console.log(workoutParams);
                        _this.http.patch(_this.apiService.baseUrl + "/users/" + _this.userId + "/workouts/" + _this.workout.id, JSON.stringify(workoutParams))
                            .subscribe(function (data) { console.log("workout is now complete!"); }, function (err) { return reject(err); }, function () { return console.log("workout submitted"); });
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DashboardWorkoutComponent.prototype, "workout", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DashboardWorkoutComponent.prototype, "workoutControlGroup", void 0);
                DashboardWorkoutComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard-workout',
                        template: "\n    <div class=\"col-md-6\">\n      <ul *ngFor=\"#exercise_detail of workout.exercise_details\">\n        <h4>{{exercise_detail.exercise.name}}</h4>\n        <li *ngIf=\"exercise_detail.reps\">Reps: {{exercise_detail.reps}}</li>\n        <li *ngIf=\"exercise_detail.sets\">Sets: {{exercise_detail.sets}}</li>\n        <li *ngIf=\"exercise_detail.time\">Time: {{exercise_detail.time}}</li>\n        <li *ngIf=\"exercise_detail.weight\">Weight: {{exercise_detail.weight}}</li>\n      </ul>\n      <form [ngFormModel]=\"singleWorkoutGroup\" (ngSubmit)=\"onSubmit(singleWorkoutGroup.value)\">\n        <input type=\"hidden\" class=\"form-control\" [ngFormControl]=\"workoutIdControl\" ([ngModel])=\"id\" />\n        <input type=\"hidden\" class=\"form-control\" [ngFormControl]=\"completeControl\" ([ngModel])=\"complete\" />\n        <input type=\"submit\" />\n      </form>\n    </div>\n\n    <hr />\n    ",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [api_service_1.APIService, http_service_1.HttpClient])
                ], DashboardWorkoutComponent);
                return DashboardWorkoutComponent;
            })();
            exports_1("DashboardWorkoutComponent", DashboardWorkoutComponent);
        }
    }
});
//# sourceMappingURL=dashboard-workout.component.js.map