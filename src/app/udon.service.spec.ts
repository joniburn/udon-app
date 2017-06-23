import { TestBed, inject } from '@angular/core/testing';

import { UdonService } from './udon.service';

describe('UdonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UdonService]
    });
  });

  it('should be created', inject([UdonService], (service: UdonService) => {
    expect(service).toBeTruthy();
  }));
});
