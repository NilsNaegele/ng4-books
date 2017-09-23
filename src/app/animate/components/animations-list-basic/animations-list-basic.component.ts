import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Technology } from '../../../shared/services/animations.service';
@Component({
  selector: 'app-animations-list-basic',
  template: `
          <ul>
              <li class="mt-5 text-center" *ngFor="let technology of technologies"
                [@technologyState]="technology.state"
                (click)="technology.toggleState()"
              >{{ technology.name }}</li>
          </ul>
  `,
  styleUrls: ['./animations-list-basic.component.css'],
  animations: [
    trigger('technologyState', [
      state('inactive', style({
        backgroundColor: '#f4ee42',
        color: '#fff',
        transform: 'scale(1.5)'
      })),
      state('active', style({
        backgroundColor: '#EB6864',
        color: '#fff',
        transform: 'scale(3)'
      })),
      transition('inactive <=> active', animate('1500ms ease-in'))
    ])
  ]
})
export class AnimationsListBasicComponent {
  @Input() technologies: Technology[];


}
