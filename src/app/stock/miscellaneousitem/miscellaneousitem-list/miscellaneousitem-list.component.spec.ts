import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousitemListComponent } from './miscellaneousitem-list.component';

describe('MiscellaneousitemListComponent', () => {
  let component: MiscellaneousitemListComponent;
  let fixture: ComponentFixture<MiscellaneousitemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscellaneousitemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscellaneousitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
