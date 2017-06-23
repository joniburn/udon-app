import { TestBed, inject } from '@angular/core/testing';

import { EnglishUdonService } from './english-udon.service';

describe('EnglishUdonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnglishUdonService]
    });
  });

  it('should be created', inject([EnglishUdonService], (service: EnglishUdonService) => {
    expect(service).toBeTruthy();
  }));
});
