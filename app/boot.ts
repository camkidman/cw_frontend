import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {AuthHttp} from 'angular2-jwt';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Config, SATELLIZER_PROVIDERS, Auth} from 'ng2-ui-auth';
import 'rxjs/add/operator/map'

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    SATELLIZER_PROVIDERS({providers: {google: {clientId: GOOGLE_CLIENT_ID}}}),
    provide(AuthHttp, {
        useFactory: (auth: Auth, config: Config) => {
            return new AuthHttp({
                tokenName: config.tokenName,
                tokenGetter: () => auth.getToken(),
            });
        },
        deps: [Auth, Config],
    }),
]);
