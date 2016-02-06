System.register(['angular2/core', './services/api.service', './services/http.service', "angular2/common", "./exercise-detail-form.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, api_service_1, http_service_1, common_1, common_2, exercise_detail_form_component_1;
    var InitialTestFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (exercise_detail_form_component_1_1) {
                exercise_detail_form_component_1 = exercise_detail_form_component_1_1;
            }],
        execute: function() {
            InitialTestFormComponent = (function () {
                function InitialTestFormComponent(apiService, http) {
                    this.apiService = apiService;
                    this.http = http;
                    this.exerciseDetailGroup = new common_2.ControlGroup({});
                    this.userId = localStorage.getItem("user_id");
                    this.getInitialTest();
                }
                InitialTestFormComponent.prototype.getInitialTest = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http.get(_this.apiService.baseUrl + "/users/" + _this.userId + "/initial_test")
                            .subscribe(function (data) {
                            _this.initialTestData = data.json(),
                                _this.initialTestWorkouts = _this.initialTestData.initial_test.workouts,
                                _this.initialTestExerciseDetails = _this.initialTestWorkouts[0].exercise_details,
                                _this.initialTestExercises = _this.initialTestWorkouts[0].exercises;
                        }, function (err) { return reject(err); }, function () { return console.log("got the initial test!"); });
                    });
                };
                InitialTestFormComponent.prototype.onSubmit = function (data) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var exerciseDetails = data;
                        var initialTestParams = { workout: { exercise_details_attributes: [] } };
                        for (var item in exerciseDetails) {
                            if (exerciseDetails.hasOwnProperty(item)) {
                                initialTestParams.workout.exercise_details_attributes.push(exerciseDetails[item]);
                            }
                        }
                        console.log(initialTestParams);
                        _this.http.patch(_this.apiService.baseUrl + "/users/" + _this.userId + "/workouts/" + _this.initialTestWorkouts[0].id, JSON.stringify(initialTestParams))
                            .subscribe(function (data) { console.log("personal detail created, biotch!"); }, function (err) { return reject(err); }, function () { return console.log("finished creating personal detail"); });
                    });
                };
                InitialTestFormComponent = __decorate([
                    core_1.Component({
                        selector: 'initial-test-form',
                        templateUrl: 'app/templates/forms/initial-test-form.component.html',
                        providers: [http_service_1.HttpClient, api_service_1.APIService],
                        directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, exercise_detail_form_component_1.ExerciseDetailFormComponent],
                    }), 
                    __metadata('design:paramtypes', [api_service_1.APIService, http_service_1.HttpClient])
                ], InitialTestFormComponent);
                return InitialTestFormComponent;
            })();
            exports_1("InitialTestFormComponent", InitialTestFormComponent);
        }
    }
});
//# sourceMappingURL=initial-test-form.component.js.map