System.register(['angular2/core', './services/user.service', './user-dashboard.component', './login-form.component', './services/api.service', "./services/http.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1, user_dashboard_component_1, login_form_component_1, api_service_1, http_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_dashboard_component_1_1) {
                user_dashboard_component_1 = user_dashboard_component_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_userService) {
                    this._userService = _userService;
                    this.title = "Calendar Workouts";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'cw-api-app',
                        template: "\n    <h1>{{title}}</h1>\n    <div><p>Test!</p></div>\n    <ul><li (click)=\"userFetch(event)\">Blah</li></ul>\n    <div class=\"user-info\">\n      <cw-user-dashboard [user]=\"user\"></cw-user-dashboard>\n    </div>\n    <login-form></login-form>\n  ",
                        directives: [user_dashboard_component_1.UserDashboardComponent, login_form_component_1.LoginFormComponent],
                        providers: [user_service_1.UserService, api_service_1.APIService, http_service_1.HttpClient]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map