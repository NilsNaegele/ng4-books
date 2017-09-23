import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, AnimationEvent } from '@angular/animations';

import { Technology } from '../animations.service';

@Component({
  selector: 'app-animations-list-multistep',
  template: `
        <ul>
              <li class="btn-primary text-center mt-3" style="height: 3rem; width:10rem; padding-top:0.7rem;"
              *ngFor="let technology of technologies"
              (@flyInOut.start)="animationStarted($event)"
              (@flyInOut.done)="animationDone($event)"
              [@flyInOut]="'in'">
                  {{ technology.name }}
              </li>
        </ul>
  `,
  styleUrls: ['./animations-list-multistep.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-500%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(130px)', offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)', offset: 0}),
          style({opacity: 1, transform: 'translateX(-130px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(500%)', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class AnimationsListMultistepComponent {
  @Input() technologies: Technology[];

  animationStarted(event: AnimationEvent) {
    // console.warn('Animation started: ', event);
  }

  animationDone(event: AnimationEvent) {
    // console.warn('Animation done: ', event);
  }

}
