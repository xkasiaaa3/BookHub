import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTitleComponent } from './book-title.component';

describe('BookTitleComponent', () => {
  let component: BookTitleComponent;
  let fixture: ComponentFixture<BookTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookTitleComponent]
    });
    fixture = TestBed.createComponent(BookTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
