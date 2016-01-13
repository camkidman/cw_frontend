System.register(['angular2/core', './services/user.service', './user-dashboard.component', './login.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1, user_dashboard_component_1, login_component_1;
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
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_userService) {
                    this._userService = _userService;
                    this.title = "Calendar Workouts";
                }
                AppComponent.prototype.userFetch = function () {
                    var _this = this;
                    console.log("wtf");
                    this._userService.getUserDashboard().subscribe(function (res) { return _this.user = res; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'cw-api-app',
                        template: "\n    <h1>{{title}}</h1>\n    <div><p>Test!</p></div>\n    <ul><li (click)=\"userFetch(event)\">Blah</li></ul>\n    <div class=\"user-info\">\n      <cw-user-dashboard [user]=\"user\"></cw-user-dashboard>\n    </div>\n    <login-links></login-links>\n  ",
                        directives: [user_dashboard_component_1.UserDashboardComponent, login_component_1.LoginComponent],
                        providers: [user_service_1.UserService]
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