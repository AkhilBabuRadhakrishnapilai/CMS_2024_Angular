import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtestEditComponent } from './newtest-edit.component';

describe('NewtestEditComponent', () => {
  let component: NewtestEditComponent;
  let fixture: ComponentFixture<NewtestEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtestEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
