import {Component} from 'angular2/core';

@Component({
  selector: 'cw-user-dashboard',
  template: `
    <div>{{user}}</div>
  `
  inputs: ['user']
})

export class UserDashboardComponent {

}