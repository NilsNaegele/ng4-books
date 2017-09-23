import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AnimationsComponent } from './components/animations/animations.component';
import { AnimationsListBasicComponent } from './components/animations-list-basic/animations-list-basic.component';
import { AnimationsListEnterLeaveComponent } from './components/animations-list-enter-leave/animations-list-enter-leave.component';
import { AnimationsListEnterLeaveStatesComponent } from './components/animations-list-enter-leave-states/animations-list-enter-leave-states.component';
import { AnimationsListMultistepComponent } from './components/animations-list-multistep/animations-list-multistep.component';
import { AnimationsListGroupsComponent } from './components/animations-list-groups/animations-list-groups.component';

import { AnimationsService } from '../shared/services/animations.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'animations', component: AnimationsComponent }
    ])
  ],
  declarations: [
      AnimationsComponent,
      AnimationsListBasicComponent,
      AnimationsListEnterLeaveComponent,
      AnimationsListEnterLeaveStatesComponent,
      AnimationsListMultistepComponent,
      AnimationsListGroupsComponent
    ],
    providers: [ AnimationsService ]
})
export class AnimateModule { }
