import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistViewComponent } from './pharmacist-view.component';

describe('PharmacistViewComponent', () => {
  let component: PharmacistViewComponent;
  let fixture: ComponentFixture<PharmacistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacistViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
