import { TestBed } from '@angular/core/testing';

import { PharmacistServiceService } from './pharmacist-service.service';

describe('PharmacistServiceService', () => {
  let service: PharmacistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
