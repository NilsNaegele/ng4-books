import { Component } from '@angular/core';

import { Technology, AnimationsService } from '../animations.service';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent {
  technologies: Technology[];
  animationsLB = true;
  animationsLEL = false;

  constructor(public technologyService: AnimationsService) {
    this.technologies = technologyService.technologies;
  }

  animationsListBasic() {
      this.animationsLB = !this.animationsLB;
      this.animationsLEL = false;
  }

  animationsListEnterLeave() {
    this.animationsLEL = !this.animationsLEL;
    this.animationsLB = false;
  }



}
