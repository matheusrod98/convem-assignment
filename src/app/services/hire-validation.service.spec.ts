import { TestBed } from '@angular/core/testing';

import { HireValidationService } from './hire-validation.service';

describe('HireValidationService', () => {
  let service: HireValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HireValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
