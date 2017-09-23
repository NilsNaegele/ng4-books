import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsListEnterLeaveComponent } from './animations-list-enter-leave.component';

describe('AnimationsListEnterLeaveComponent', () => {
  let component: AnimationsListEnterLeaveComponent;
  let fixture: ComponentFixture<AnimationsListEnterLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationsListEnterLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsListEnterLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
