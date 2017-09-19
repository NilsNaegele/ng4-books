import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { BookService } from '../book.service';
import { Observable } from 'rxjs/Observable';

import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  appUser: AppUser;

  constructor(private authenticationService: AuthenticationService,
              private bookService: BookService) {
    authenticationService.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  onSearch(query: string): void {
    if (!query) { return; }
    this.bookService.searchEvent.emit(query.toLowerCase());
  }

  logout() {
    this.authenticationService.logout();
  }

}
