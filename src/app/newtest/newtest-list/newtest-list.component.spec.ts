import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtestListComponent } from './newtest-list.component';

describe('NewtestListComponent', () => {
  let component: NewtestListComponent;
  let fixture: ComponentFixture<NewtestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
