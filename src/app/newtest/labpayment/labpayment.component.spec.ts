import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabpaymentComponent } from './labpayment.component';

describe('LabpaymentComponent', () => {
  let component: LabpaymentComponent;
  let fixture: ComponentFixture<LabpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
