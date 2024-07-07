import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtestAddComponent } from './newtest-add.component';

describe('NewtestAddComponent', () => {
  let component: NewtestAddComponent;
  let fixture: ComponentFixture<NewtestAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtestAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
