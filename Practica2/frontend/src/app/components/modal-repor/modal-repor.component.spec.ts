import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReporComponent } from './modal-repor.component';

describe('ModalReporComponent', () => {
  let component: ModalReporComponent;
  let fixture: ComponentFixture<ModalReporComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalReporComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
