System.register(['angular2/core', "./services/http.service", "./services/api.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_service_1, api_service_1;
    var UserDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            UserDashboardComponent = (function () {
                function UserDashboardComponent(_http, _apiService) {
                    this._http = _http;
                    this._apiService = _apiService;
                    this.userId = localStorage.getItem("user_id");
                    this.http = _http;
                    this.apiService = _apiService;
                    console.log("user constructed");
                    this.getUserDashboardData();
                }
                UserDashboardComponent.prototype.getUserDashboardData = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http.get(_this.apiService.baseUrl + "/users/" + _this.userId + "/dashboard")
                            .subscribe(function (data) {
                            console.log(data),
                                _this.userDashboardJSON = data.json(),
                                _this.goals = _this.userDashboardJSON.goals,
                                _this.personalDetails = _this.userDashboardJSON.personal_details,
                                _this.workouts = _this.userDashboardJSON.workouts,
                                _this.user = _this.userDashboardJSON,
                                console.log(_this.userDashboardJSON);
                        }, function (err) { return reject(err); }, function () { return console.log("dashboard loaded!"); });
                    });
                };
                UserDashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'cw-user-dashboard',
                        templateUrl: 'app/templates/user-dashboard.component.html',
                        inputs: ['userDashboardJSON', 'goals', 'user'],
                        providers: [http_service_1.HttpClient, api_service_1.APIService],
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpClient, api_service_1.APIService])
                ], UserDashboardComponent);
                return UserDashboardComponent;
            })();
            exports_1("UserDashboardComponent", UserDashboardComponent);
        }
    }
});
//# sourceMappingURL=user-dashboard.component.js.map