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
    var RegistrationComponent;
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
            RegistrationComponent = (function () {
                function RegistrationComponent(apiService, fb) {
                    this.apiService = apiService;
                    this.form = fb.group({ "prop1": ["", common_1.Validators.required] });
                }
                RegistrationComponent.prototype.onSubmit = function (data) {
                    this.apiService.register(data.email, data.password, data.passwordConfirmation);
                };
                RegistrationComponent = __decorate([
                    core_1.Component({
                        selector: 'registration-form',
                        templateUrl: 'app/templates/forms/registration.component.html',
                        providers: [http_service_1.HttpClient, api_service_1.APIService],
                        directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [api_service_1.APIService, common_1.FormBuilder])
                ], RegistrationComponent);
                return RegistrationComponent;
            })();
            exports_1("RegistrationComponent", RegistrationComponent);
        }
    }
});
//# sourceMappingURL=registration.component.js.map