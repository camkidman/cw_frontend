System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent() {
                    this.tokenName = getCwTokenName();
                    this.tokenGetter = getCwAuthToken();
                    this.jwtHelper = new JwtHelper();
                    headerName = "application/vnd.calendarworkouts.v1";
                    headerPrevis = "Accept";
                }
                LoginComponent.prototype.authHeaderName = function () {
                    this.headerName;
                };
                LoginComponent.prototype.authHeaderPrefix = function () {
                    this.headerPrefix;
                };
                //userFetch() {
                //    this._userService.getUserDashboard().subscribe(res => this.user = res);
                //}
                LoginComponent.prototype.getCwAuthToken = function () {
                    return this.jwtHelper.localStorage.getItem('access-token');
                };
                LoginComponent.prototype.getCwTokenName = function () {
                    return this.jwtHelper.localStorage.getItem('client');
                };
                LoginComponent.prototype.loggedIn = function () {
                    return tokenNotExpired();
                };
                LoginComponent.prototype.logout = function () {
                };
                LoginComponent.prototype.login = function () {
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-links',
                        template: "\n    <div *ngIf=\"!loggedIn()\">\n        <button (click)=\"login()\">Login</button>\n        <span>Or...</span>\n        <div>\n\n        </div>\n    </div>\n    <button *ngIf=\"loggedIn()\" (click)=\"logout()\">Logout</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map