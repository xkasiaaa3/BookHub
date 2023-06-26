import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGenresComponent } from './book-genres.component';

describe('BookGenresComponent', () => {
  let component: BookGenresComponent;
  let fixture: ComponentFixture<BookGenresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookGenresComponent]
    });
    fixture = TestBed.createComponent(BookGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
