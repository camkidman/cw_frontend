import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';

@Component({
    selector: 'login-form',
    templateUrl: 'app/templates/forms/login-form.component.html'
})

export class LoginFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}