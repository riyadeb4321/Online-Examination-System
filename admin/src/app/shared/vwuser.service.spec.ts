import { TestBed, inject } from '@angular/core/testing';

import { VwuserService } from './vwuser.service';

describe('VwuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VwuserService]
    });
  });

  it('should be created', inject([VwuserService], (service: VwuserService) => {
    expect(service).toBeTruthy();
  }));
});
