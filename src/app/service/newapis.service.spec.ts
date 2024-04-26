import { TestBed } from '@angular/core/testing';

import { NewapisService } from './newapis.service';

describe('NewapisService', () => {
  let service: NewapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
