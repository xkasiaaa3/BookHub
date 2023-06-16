import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarTitleComponent } from './search-bar-title.component';

describe('SearchBarTitleComponent', () => {
  let component: SearchBarTitleComponent;
  let fixture: ComponentFixture<SearchBarTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarTitleComponent]
    });
    fixture = TestBed.createComponent(SearchBarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
