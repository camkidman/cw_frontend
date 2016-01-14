import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt/angular2-jwt';
import {HttpClient} from './services/http.service';
import {LoginFormComponent} from './login-form.component';
import 'rxjs/add/operator/map'
import {provide} from "angular2/core";

bootstrap(AppComponent, [
    HTTP_PROVIDERS, HttpClient
    //provide(AuthConfig, { useFactory: () => {
    //    return new AuthConfig({
    //        headerName: authHeaderName,
    //        headerPrefix: authHeaderPrefix,
    //        tokenName: authTokenName,
    //        tokenGetter: authToken,
    //        noJwtError: true
    //    })
    //}}),
    //AuthHttp
]);
