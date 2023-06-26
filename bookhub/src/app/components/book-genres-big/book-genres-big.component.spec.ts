import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGenresBigComponent } from './book-genres-big.component';

describe('BookGenresBigComponent', () => {
  let component: BookGenresBigComponent;
  let fixture: ComponentFixture<BookGenresBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookGenresBigComponent]
    });
    fixture = TestBed.createComponent(BookGenresBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
