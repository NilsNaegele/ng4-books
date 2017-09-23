import { Component, Input} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Technology } from '../../../shared/services/animations.service';

@Component({
  selector: 'app-animations-list-enter-leave-states',
  template: `
      <ul>
            <li class="btn-info text-center mt-3" style="height: 3rem; width:10rem; padding-top:0.7rem;"
              *ngFor="let technology of technologies"
                (click)="technology.toggleState()"
                [@technologyState]="technology.state">
                {{ technology.name }}
            </li>
      </ul>
  `,
  styleUrls: ['./animations-list-enter-leave-states.component.css'],
  animations: [
    trigger('technologyState', [
        state('inactive', style({ transform: 'translateX(0) scale(1)'})),
        state('active', style({ transform: 'translateX(0) scale(1.5)'})),
        transition('inactive => active', animate('1000ms ease-in')),
        transition('active => inactive', animate('1000ms ease-out')),
        transition('void => inactive', [
          style({ transform: 'translateX(-500%) scale(1)'}),
          animate(100)
        ]),
        transition('inactive => void', [
          animate(100, style({transform: 'translateX(500%) scale(1)'}))
        ]),
        transition('void => active', [
          style({ transform: 'translateX(0) scale(0)'}),
          animate(200)
        ]),
        transition('active => void', [
          animate(200, style({transform: 'translateX(0) scale(0)'}))
        ])
    ])
  ]
})
export class AnimationsListEnterLeaveStatesComponent {
  @Input() technologies: Technology[];
}
