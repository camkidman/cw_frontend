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
    var PersonalDetailFormComponent;
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
            PersonalDetailFormComponent = (function () {
                function PersonalDetailFormComponent(apiService, http, fb) {
                    this.apiService = apiService;
                    this.http = http;
                    this.userId = localStorage.getItem("user_id");
                    this.form = fb.group({ "prop1": ["", common_1.Validators.required] });
                }
                PersonalDetailFormComponent.prototype.onSubmit = function (data) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var date = new Date();
                        var yyyy = date.getFullYear();
                        var mm = date.getMonth();
                        var dd = date.getDate();
                        data.date = yyyy + "-" + dd + "-" + mm;
                        var personalDetailParams = { "personal_detail": data };
                        console.log(personalDetailParams);
                        _this.http.post(_this.apiService.baseUrl + "/users/" + _this.userId + "/personal_details", JSON.stringify(personalDetailParams))
                            .subscribe(function (data) { console.log("personal detail created, biotch!"); }, function (err) { return reject(err); }, function () { return console.log("finished creating personal detail"); });
                    });
                };
                PersonalDetailFormComponent = __decorate([
                    core_1.Component({
                        selector: 'personal-detail-form',
                        templateUrl: 'app/templates/forms/personal-detail-form.component.html',
                        providers: [http_service_1.HttpClient, api_service_1.APIService],
                        directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        inputs: ['date']
                    }), 
                    __metadata('design:paramtypes', [api_service_1.APIService, http_service_1.HttpClient, common_1.FormBuilder])
                ], PersonalDetailFormComponent);
                return PersonalDetailFormComponent;
            })();
            exports_1("PersonalDetailFormComponent", PersonalDetailFormComponent);
        }
    }
});
//# sourceMappingURL=personal-detail-form.component.js.map