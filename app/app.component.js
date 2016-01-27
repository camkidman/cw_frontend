System.register(['angular2/core', './services/user.service', './login-form.component', './services/api.service', "./services/http.service", "angular2/router", './registration.component', './confirmation.component', './user-dashboard.component', "./personal-detail-form.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1, login_form_component_1, api_service_1, http_service_1, router_1, registration_component_1, confirmation_component_1, user_dashboard_component_1, personal_detail_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            },
            function (confirmation_component_1_1) {
                confirmation_component_1 = confirmation_component_1_1;
            },
            function (user_dashboard_component_1_1) {
                user_dashboard_component_1 = user_dashboard_component_1_1;
            },
            function (personal_detail_form_component_1_1) {
                personal_detail_form_component_1 = personal_detail_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_userService, _apiService) {
                    this._userService = _userService;
                    this._apiService = _apiService;
                    this.title = "Calendar Workouts";
                    this.apiService = _apiService;
                }
                AppComponent.prototype.logout = function () {
                    console.log("call logout");
                    this.apiService.logout();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'cw-api-app',
                        template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['SignUp']\">Register</a>\n      <a [routerLink]=\"['Login']\">Log In</a>\n      <a (click)=\"logout()\" href=\"#\">Log Out</a>\n      <a [routerLink]=\"['UserDashboard']\">Dashboard</a>\n      <a [routerLink]=\"['PersonalDetailForm']\">Update Personal Details</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        directives: [user_dashboard_component_1.UserDashboardComponent, login_form_component_1.LoginFormComponent, registration_component_1.RegistrationComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService, api_service_1.APIService, http_service_1.HttpClient]
                    }),
                    router_1.RouteConfig([
                        { path: '/sign_up', name: 'SignUp', component: registration_component_1.RegistrationComponent },
                        { path: '/login', name: 'Login', component: login_form_component_1.LoginFormComponent },
                        { path: '/confirm_registration', name: 'ConfirmRegistration', component: confirmation_component_1.ConfirmationComponent },
                        { path: '/dashboard', name: 'UserDashboard', component: user_dashboard_component_1.UserDashboardComponent },
                        { path: '/update_personal_details', name: 'PersonalDetailForm', component: personal_detail_form_component_1.PersonalDetailFormComponent }
                    ]), 
                    __metadata('design:paramtypes', [user_service_1.UserService, api_service_1.APIService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map