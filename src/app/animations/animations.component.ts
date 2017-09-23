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
  animationsLELS = false;
  animationsLMS = false;
  animationsLG = false;

  constructor(public technologyService: AnimationsService) {
    this.technologies = technologyService.technologies;
  }

  animationsListBasic() {
      this.animationsLB = !this.animationsLB;
      this.animationsLEL = false;
      this.animationsLELS = false;
      this.animationsLMS = false;
      this.animationsLG = false;
  }

  animationsListEnterLeave() {
    this.animationsLEL = !this.animationsLEL;
    this.animationsLB = false;
    this.animationsLELS = false;
    this.animationsLMS = false;
    this.animationsLG = false;
  }

  animationsListEnterLeaveState() {
    this.animationsLELS = !this.animationsLELS;
    this.animationsLB = false;
    this.animationsLEL = false;
    this.animationsLMS = false;
    this.animationsLG = false;
  }

  animationsListMultiStep() {
    this.animationsLMS = !this.animationsLMS;
    this.animationsLB = false;
    this.animationsLEL = false;
    this.animationsLELS = false;
    this.animationsLG = false;
  }

  animationsListGroup() {
    this.animationsLG = !this.animationsLG;
    this.animationsLB = false;
    this.animationsLEL = false;
    this.animationsLELS = false;
    this.animationsLMS = false;
  }



}
