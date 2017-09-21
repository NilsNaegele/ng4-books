import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookQuantityComponent } from './book-quantity.component';

describe('BookQuantityComponent', () => {
  let component: BookQuantityComponent;
  let fixture: ComponentFixture<BookQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
