import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAttendanceComponent } from './cards-attendance.component';

describe('CardsAttendanceComponent', () => {
  let component: CardsAttendanceComponent;
  let fixture: ComponentFixture<CardsAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
