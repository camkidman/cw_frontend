System.register(['angular2/platform/browser', './app.component', 'angular2/http', 'angular2-jwt/angular2-jwt', './login.component', 'rxjs/add/operator/map', "angular2/core"], function(exports_1) {
    var browser_1, app_component_1, http_1, angular2_jwt_1, login_component_1, core_1;
    var loginService, authHeaderName, authHeaderPrefix, authToken, authTokenName;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            loginService = new login_component_1.LoginComponent();
            authHeaderName = loginService.authHeaderName();
            authHeaderPrefix = loginService.authHeaderPrefix();
            authToken = loginService.getCwAuthToken();
            authTokenName = loginService.getCwTokenName();
            browser_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                core_1.provide(angular2_jwt_1.AuthConfig, { useFactory: function () {
                        return new angular2_jwt_1.AuthConfig({
                            headerName: authHeaderName,
                            headerPrefix: authHeaderPrefix,
                            tokenName: authTokenName,
                            tokenGetter: authToken,
                            noJwtError: true
                        });
                    } }),
                angular2_jwt_1.AuthHttp
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map