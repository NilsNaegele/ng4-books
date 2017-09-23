import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsListGroupsComponent } from './animations-list-groups.component';

describe('AnimationsListGroupsComponent', () => {
  let component: AnimationsListGroupsComponent;
  let fixture: ComponentFixture<AnimationsListGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationsListGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsListGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
