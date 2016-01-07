import {Component, AfterContentInit, ElementRef, Renderer} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Auth} from 'ng2-ui-auth';
//import {NgMessages} from '../formComponents/ngMessages';
//import {CustomValidators} from '../formComponents/customValidators';
//import {DefaultHandlers} from '../httpDefaults';

/**
 * Created by Ron on 18/12/2015.
 */

@Component({
    selector: 'app-login',
    templateUrl: '../templates/login_form.html',
    directives: [NgMessages, ROUTER_DIRECTIVES],
})
export class Login implements AfterContentInit {
    form: ControlGroup;
    user = { email: '', password: '' };
    userControlsConfig = {
        email: ['', Validators.compose([Validators.required, CustomValidators.email])],
        password: ['', Validators.required],
    };
    login() {
        this.auth.login(this.user)
            .subscribe(
                () => this.goToMain(),
                this.handlers.error
            );
    }
    authenticate(provider: string) {
        this.auth.authenticate(provider)
            .subscribe(
                () => this.goToMain(),
                this.handlers.error
            );
    }
    goToMain() {
        this.router.navigate(['Main']);
    }
    ngAfterContentInit() {
        this.renderer.setElementClass(this.element, 'app', true);
        if (this.auth.isAuthenticated()) {
            this.goToMain();
        }
    }
    constructor(private auth: Auth,
                private fb: FormBuilder,
                private router: Router,
                private element: ElementRef,
                private renderer: Renderer,
                private handlers: DefaultHandlers) {
        this.form = fb.group(this.userControlsConfig);
    }
}
