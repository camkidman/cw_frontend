System.register(['angular2/platform/browser', 'angular2/core', 'angular2-jwt', './app.component', 'angular2/http', 'ng2-ui-auth', 'rxjs/add/operator/map'], function(exports_1) {
    var browser_1, core_1, angular2_jwt_1, app_component_1, http_1, ng2_ui_auth_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng2_ui_auth_1_1) {
                ng2_ui_auth_1 = ng2_ui_auth_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                ng2_ui_auth_1.SATELLIZER_PROVIDERS({ providers: { google: { clientId: GOOGLE_CLIENT_ID } } }),
                core_1.provide(angular2_jwt_1.AuthHttp, {
                    useFactory: function (auth, config) {
                        return new angular2_jwt_1.AuthHttp({
                            tokenName: config.tokenName,
                            tokenGetter: function () { return auth.getToken(); },
                        });
                    },
                    deps: [ng2_ui_auth_1.Auth, ng2_ui_auth_1.Config],
                }),
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map