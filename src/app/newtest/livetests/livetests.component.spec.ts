import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetestsComponent } from './livetests.component';

describe('LivetestsComponent', () => {
  let component: LivetestsComponent;
  let fixture: ComponentFixture<LivetestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivetestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivetestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
