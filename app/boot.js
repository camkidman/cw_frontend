System.register(['angular2/platform/browser', './app.component', 'angular2/http', './services/http.service', 'rxjs/add/operator/map'], function(exports_1) {
    var browser_1, app_component_1, http_1, http_service_1;
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
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS, http_service_1.HttpClient
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map