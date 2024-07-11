import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestAddComponent } from './labtest-add.component';

describe('LabtestAddComponent', () => {
  let component: LabtestAddComponent;
  let fixture: ComponentFixture<LabtestAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabtestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
