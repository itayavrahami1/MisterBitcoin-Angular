import { TestBed } from '@angular/core/testing';

import { BitcoinResolverService } from './bitcoin-resolver.service';

describe('BitcoinResolverService', () => {
  let service: BitcoinResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitcoinResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
