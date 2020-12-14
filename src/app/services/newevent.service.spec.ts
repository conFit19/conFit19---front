import { TestBed } from '@angular/core/testing';

import { NeweventService } from './newevent.service';

describe('NeweventService', () => {
  let service: NeweventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeweventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
