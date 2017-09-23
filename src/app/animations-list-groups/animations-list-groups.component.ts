import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

import { Technology } from '../animations.service';

@Component({
  selector: 'app-animations-list-groups',
  template: `
      <ul>
            <li class="btn-danger text-center mt-3" style="height: 3rem; width:10rem; padding-top:0.7rem;"
            *ngFor="let technology of technologies"
            [@flyInOut]="'in'">
            {{ technology.name }}
            </li>
      </ul>
  `,
  styleUrls: ['./animations-list-groups.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.5s 0.7s ease', style({
            transform: 'translateX(0)',
            width: 240
          })),
          animate('0.5s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.5s ease', style({
            transform: 'translateX(600px)',
            width: 20
          })),
          animate('0.5s 0.3s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class AnimationsListGroupsComponent {
  @Input() technologies: Technology[];
}
