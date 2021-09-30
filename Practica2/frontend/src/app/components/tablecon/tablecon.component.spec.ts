import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableconComponent } from './tablecon.component';

describe('TableconComponent', () => {
  let component: TableconComponent;
  let fixture: ComponentFixture<TableconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
