import { TestBed } from '@angular/core/testing';

import { BaseConverterService } from './base-converter.service';

describe('BaseConverterService', () => {
  let service: BaseConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
