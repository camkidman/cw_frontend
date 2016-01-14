System.register(['angular2/core', './services/api.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, api_service_1;
    var LoginFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            LoginFormComponent = (function () {
                function LoginFormComponent(apiService) {
                    this.apiService = apiService;
                }
                LoginFormComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        templateUrl: './templates/forms/login-form.component.html',
                        bindings: [api_service_1.ApiService],
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof api_service_1.ApiService !== 'undefined' && api_service_1.ApiService) === 'function' && _a) || Object])
                ], LoginFormComponent);
                return LoginFormComponent;
                var _a;
            })();
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map