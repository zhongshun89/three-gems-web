import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookExhibitionComponent } from './book-exhibition.component';

describe('BookExhibitionComponent', () => {
  let component: BookExhibitionComponent;
  let fixture: ComponentFixture<BookExhibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookExhibitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
