import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousitemEditComponent } from './miscellaneousitem-edit.component';

describe('MiscellaneousitemEditComponent', () => {
  let component: MiscellaneousitemEditComponent;
  let fixture: ComponentFixture<MiscellaneousitemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscellaneousitemEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscellaneousitemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
