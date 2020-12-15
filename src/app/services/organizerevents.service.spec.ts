import { TestBed } from '@angular/core/testing';

import { OrganizereventsService } from './organizerevents.service';

describe('OrganizereventsService', () => {
  let service: OrganizereventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizereventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
