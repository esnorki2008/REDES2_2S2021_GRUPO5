import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAttendanceComponent } from './form-attendance.component';

describe('FormAttendanceComponent', () => {
  let component: FormAttendanceComponent;
  let fixture: ComponentFixture<FormAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
