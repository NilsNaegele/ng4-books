import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsListBasicComponent } from './animations-list-basic.component';

describe('AnimationsListBasicComponent', () => {
  let component: AnimationsListBasicComponent;
  let fixture: ComponentFixture<AnimationsListBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationsListBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsListBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
