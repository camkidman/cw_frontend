System.register(['angular2/core', './services/api.service', './services/http.service', "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, api_service_1, http_service_1, common_1;
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
            }],
        execute: function() {
            InitialTestFormComponent = (function () {
                function InitialTestFormComponent(apiService, http, fb) {
                    this.apiService = apiService;
                    this.http = http;
                    this.userId = localStorage.getItem("user_id");
                    this.getInitialTest();
                    this.form = fb.group({ "prop1": ["", common_1.Validators.required] });
                }
                InitialTestFormComponent.prototype.getInitialTest = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http.get(_this.apiService.baseUrl + "/users/" + _this.userId + "/initial_test")
                            .subscribe(function (data) {
                            _this.initialTestData = data.json(),
                                console.log(_this.initialTestData.initial_test),
                                _this.initialTestWorkouts = _this.initialTestData.initial_test.workouts,
                                _this.initialTestExerciseDetails = _this.initialTestWorkouts[0].exercise_details,
                                _this.initialTestExercises = _this.initialTestWorkouts[0].exercises,
                                console.log(_this.initialTestExercises);
                        }, function (err) { return reject(err); }, function () { return console.log("got the initial test!"); });
                    });
                };
                InitialTestFormComponent.prototype.onSubmit = function (data) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var initialTestParams = { workout: data };
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
                        directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [api_service_1.APIService, http_service_1.HttpClient, common_1.FormBuilder])
                ], InitialTestFormComponent);
                return InitialTestFormComponent;
            })();
            exports_1("InitialTestFormComponent", InitialTestFormComponent);
        }
    }
});
//# sourceMappingURL=initial-test-form.component.js.map