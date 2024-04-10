import { TestBed } from '@angular/core/testing';

import { ProgressLoaderDLService } from './progress-loader-dl.service';

describe('ProgressLoaderDLService', () => {
  let service: ProgressLoaderDLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressLoaderDLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
