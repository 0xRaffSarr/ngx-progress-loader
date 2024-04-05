import { TestBed } from '@angular/core/testing';

import { NgxProgressLoadService } from './ngx-progress-load.service';

describe('NgxProgressLoadService', () => {
  let service: NgxProgressLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProgressLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
