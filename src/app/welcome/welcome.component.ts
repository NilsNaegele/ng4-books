import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  providers: [ NgbCarouselConfig ]
})
export class WelcomeComponent {

  constructor(private config: NgbCarouselConfig) {
    config.interval = 1000;
    // config.wrap = false;
    // config.keyboard = false;
  }


}
