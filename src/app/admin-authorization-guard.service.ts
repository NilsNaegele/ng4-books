import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AdminAuthorizationGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService) { }

  canActivate(): Observable<boolean> {
      return this.authenticationService.appUser$
             .map(appUser => appUser.isAdmin);
  }

}
