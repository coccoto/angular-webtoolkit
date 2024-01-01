import { TestBed } from '@angular/core/testing';

import { BaseconverterService } from './baseconverter.service';

describe('BaseconverterService', () => {
  let service: BaseconverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseconverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
