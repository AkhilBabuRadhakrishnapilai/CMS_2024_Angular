import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelabComponent } from './homelab.component';

describe('HomelabComponent', () => {
  let component: HomelabComponent;
  let fixture: ComponentFixture<HomelabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomelabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
