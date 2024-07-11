import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousitemAddComponent } from './miscellaneousitem-add.component';

describe('MiscellaneousitemAddComponent', () => {
  let component: MiscellaneousitemAddComponent;
  let fixture: ComponentFixture<MiscellaneousitemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscellaneousitemAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscellaneousitemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
