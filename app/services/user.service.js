System.register(['angular2/core', 'angular2/router', "./api.service", 'rxjs/add/operator/share'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, api_service_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            UserService = (function () {
                function UserService(API, router) {
                    this.API = API;
                    this.router = router;
                    this.isAuthenticated = false;
                    this.LOCAL_TOKEN_KEY = "jwt";
                    this.isAdmin = false;
                    this.API.setHeaders(window.localStorage.getItem(this.LOCAL_TOKEN_KEY));
                    this.getUser();
                }
                UserService.prototype.getUser = function () {
                    var _this = this;
                    var token = window.localStorage.getItem(this.LOCAL_TOKEN_KEY);
                    if (token) {
                        this.API.getUser(window.jwt_decode(token)._id).then(function (response) {
                            if (response && typeof response === "object") {
                                _this.useCredentials(token, response.data);
                            }
                            else {
                                console.error("[Couldn't Get User] - " + response.data);
                            }
                        });
                    }
                };
                UserService.prototype.storeUserCredentials = function (token) {
                    window.localStorage.setItem(this.LOCAL_TOKEN_KEY, token);
                    this.useCredentials(token);
                };
                UserService.prototype.useCredentials = function (token, user) {
                    //--
                    this.authToken = token;
                    //...
                    this.API.setHeaders(token);
                };
                UserService.prototype.login = function (username, password) {
                    var _this = this;
                    this.API.login(username, password).then(function (response) {
                        if (response.error) {
                            window.Materialize.toast(response.message, 4000, 'loginError');
                        }
                        else {
                            _this.storeUserCredentials(response.token);
                        }
                    });
                };
                UserService.prototype.logout = function () {
                    this.authToken = '';
                    this.user = {};
                    this.isAuthenticated = false;
                    this.API.setHeaders('');
                    window.localStorage.removeItem(this.LOCAL_TOKEN_KEY);
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [api_service_1.APIService, router_1.Router])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map