import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisAddComponent } from './diagnosis-add.component';

describe('DiagnosisAddComponent', () => {
  let component: DiagnosisAddComponent;
  let fixture: ComponentFixture<DiagnosisAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosisAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosisAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
