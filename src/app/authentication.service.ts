import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


@Injectable()
export class AuthenticationService {
    user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
              this.user$ = afAuth.authState;
   }

  login() {
    const returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl') || '/home';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap(user => {
      if (user) { return this.userService.get(user.uid); }
      return Observable.of(null);
    });
  }

}
