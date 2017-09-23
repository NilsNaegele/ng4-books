import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsListMultistepComponent } from './animations-list-multistep.component';

describe('AnimationsListMultistepComponent', () => {
  let component: AnimationsListMultistepComponent;
  let fixture: ComponentFixture<AnimationsListMultistepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationsListMultistepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsListMultistepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
