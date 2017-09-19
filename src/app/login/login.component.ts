import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authenticationService: AuthenticationService) { }

  login() {
    this.authenticationService.login();
  }

}
