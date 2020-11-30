import { TestBed } from '@angular/core/testing';

import { MerchanService } from './merchan.service';

describe('MerchanService', () => {
  let service: MerchanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
