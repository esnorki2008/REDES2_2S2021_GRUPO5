import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableconAttendanceComponent } from './tablecon-attendance.component';

describe('TableconAttendanceComponent', () => {
  let component: TableconAttendanceComponent;
  let fixture: ComponentFixture<TableconAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableconAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableconAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
