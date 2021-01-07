import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplesComponent } from './disciples.component';

describe('DisciplesComponent', () => {
  let component: DisciplesComponent;
  let fixture: ComponentFixture<DisciplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
