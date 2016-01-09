import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt/angular2-jwt';
import {LoginComponent} from './login.component';
import 'rxjs/add/operator/map'
import {provide} from "angular2/core";

var loginService = new LoginComponent();

var authHeaderName = loginService.authHeaderName();
var authHeaderPrefix = loginService.authHeaderPrefix();
var authToken = loginService.getCwAuthToken();
var authTokenName = loginService.getCwTokenName();

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(AuthConfig, { useFactory: () => {
        return new AuthConfig({
            headerName: authHeaderName,
            headerPrefix: authHeaderPrefix,
            tokenName: authTokenName,
            tokenGetter: authToken,
            noJwtError: true
        })
    }}),
    AuthHttp
]);
