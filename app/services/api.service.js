System.register(["angular2/core", 'rxjs/add/operator/map', "./http.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_service_1;
    var APIService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            APIService = (function () {
                function APIService(http) {
                    this.http = http;
                    this.baseUrl = "api.calendarworkouts.com/v1";
                    this.http = http;
                }
                APIService.prototype.setHeaders = function (token) {
                    this.http.setToken(token);
                };
                APIService.prototype.login = function (username, password) {
                    var _this = this;
                    //TODO: ACTUALLY ADD A REAL AUTHENTICATION SYSTEM
                    return new Promise(function (resolve, reject) {
                        var creds = { username: username, pw: password };
                        _this.http.post(_this.baseUrl + "/login", JSON.stringify(creds))
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data, err) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve(data);
                            }
                        });
                    });
                };
                APIService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_service_1.HttpClient])
                ], APIService);
                return APIService;
            })();
            exports_1("APIService", APIService);
        }
    }
});
//# sourceMappingURL=api.service.js.map