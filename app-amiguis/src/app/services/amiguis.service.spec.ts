import { TestBed } from '@angular/core/testing';

import { AmiguisService } from './amiguis.service';

describe('AmiguisService', () => {
  let service: AmiguisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmiguisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
