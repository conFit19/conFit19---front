import { TestBed } from '@angular/core/testing';

import { PresencialesService } from './presenciales.service';

describe('PresencialesService', () => {
  let service: PresencialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresencialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
