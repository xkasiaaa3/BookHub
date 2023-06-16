import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarAuthorComponent } from './search-bar-author.component';

describe('SearchBarAuthorComponent', () => {
  let component: SearchBarAuthorComponent;
  let fixture: ComponentFixture<SearchBarAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarAuthorComponent]
    });
    fixture = TestBed.createComponent(SearchBarAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
