import { TestBed } from '@angular/core/testing';

import { NewtestService } from './newtest.service';

describe('NewtestService', () => {
  let service: NewtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
