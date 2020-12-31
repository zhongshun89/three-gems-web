import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripitakaComponent } from './tripitaka.component';

describe('TripitakaComponent', () => {
  let component: TripitakaComponent;
  let fixture: ComponentFixture<TripitakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripitakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripitakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
