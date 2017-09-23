import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Technology } from '../animations.service';

@Component({
  selector: 'app-animations-list-enter-leave',
  template: `
    <ul>
          <li class="btn-success text-center mt-3" style="height: 3rem; width:10rem; padding-top:0.7rem;"
          *ngFor="let technology of technologies"
            [@flyInOut]="'in'">
              {{ technology.name }}
          </li>
    </ul>
  `,
  styleUrls: ['./animations-list-enter-leave.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(150%)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(500%)'}))
      ])
    ])
  ]
})
export class AnimationsListEnterLeaveComponent {
  @Input() technologies: Technology[];

}
