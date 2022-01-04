import { TestBed } from '@angular/core/testing';

import { DestinationResolverService } from './destination-resolver.service';

describe('DestinationResolverService', () => {
  let service: DestinationResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
