import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsListEnterLeaveStatesComponent } from './animations-list-enter-leave-states.component';

describe('AnimationsListEnterLeaveStatesComponent', () => {
  let component: AnimationsListEnterLeaveStatesComponent;
  let fixture: ComponentFixture<AnimationsListEnterLeaveStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationsListEnterLeaveStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsListEnterLeaveStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
