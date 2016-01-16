System.register(['angular2/core', './services/api.service', './services/http.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, api_service_1, http_service_1, router_1;
    var ConfirmationComponent;
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
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ConfirmationComponent = (function () {
                function ConfirmationComponent(_router, _routeParams, http, apiService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.http = http;
                    this.apiService = apiService;
                    this.http = http;
                    this.apiService = apiService;
                }
                ConfirmationComponent.prototype.ngOnInit = function () {
                    this.confirmationToken = this._routeParams.get("confirmation_token");
                    this.redirectURL = this._routeParams.get("redirect_url");
                    this.fireConfirmation(this.confirmationToken, this.redirectURL);
                };
                ConfirmationComponent.prototype.fireConfirmation = function (confirmationToken, redirectURL) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http.get(_this.apiService.baseUrl + "/auth/confirmation?config=default&confirmation_token=" + confirmationToken + "&redirect_url=" + redirectURL)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data, err) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                // TODO: update the template to show the confirmation on success
                                resolve(data);
                            }
                        });
                    });
                };
                ConfirmationComponent = __decorate([
                    core_1.Component({
                        selector: 'confirmation-template',
                        templateUrl: 'app/templates/confirmation.component.html',
                        providers: [http_service_1.HttpClient, api_service_1.APIService],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, http_service_1.HttpClient, api_service_1.APIService])
                ], ConfirmationComponent);
                return ConfirmationComponent;
            })();
            exports_1("ConfirmationComponent", ConfirmationComponent);
        }
    }
});
//# sourceMappingURL=confirmation.component.js.map