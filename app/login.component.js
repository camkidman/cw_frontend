System.register(['angular2/core', 'angular2/router', 'angular2/common', 'ng2-ui-auth'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, ng2_ui_auth_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_ui_auth_1_1) {
                ng2_ui_auth_1 = ng2_ui_auth_1_1;
            }],
        execute: function() {
            //import {NgMessages} from '../formComponents/ngMessages';
            //import {CustomValidators} from '../formComponents/customValidators';
            //import {DefaultHandlers} from '../httpDefaults';
            /**
             * Created by Ron on 18/12/2015.
             */
            Login = (function () {
                function Login(auth, fb, router, element, renderer, handlers) {
                    this.auth = auth;
                    this.fb = fb;
                    this.router = router;
                    this.element = element;
                    this.renderer = renderer;
                    this.handlers = handlers;
                    this.user = { email: '', password: '' };
                    this.userControlsConfig = {
                        email: ['', common_1.Validators.compose([common_1.Validators.required, CustomValidators.email])],
                        password: ['', common_1.Validators.required],
                    };
                    this.form = fb.group(this.userControlsConfig);
                }
                Login.prototype.login = function () {
                    var _this = this;
                    this.auth.login(this.user)
                        .subscribe(function () { return _this.goToMain(); }, this.handlers.error);
                };
                Login.prototype.authenticate = function (provider) {
                    var _this = this;
                    this.auth.authenticate(provider)
                        .subscribe(function () { return _this.goToMain(); }, this.handlers.error);
                };
                Login.prototype.goToMain = function () {
                    this.router.navigate(['Main']);
                };
                Login.prototype.ngAfterContentInit = function () {
                    this.renderer.setElementClass(this.element, 'app', true);
                    if (this.auth.isAuthenticated()) {
                        this.goToMain();
                    }
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'app-login',
                        //    templateUrl: '../templates/login_form.html',
                        directives: [NgMessages, router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [ng2_ui_auth_1.Auth, common_1.FormBuilder, router_1.Router, core_1.ElementRef, core_1.Renderer, Object])
                ], Login);
                return Login;
            })();
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.component.js.map