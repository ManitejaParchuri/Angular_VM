import { TestBed } from '@angular/core/testing';

import { ProductjasonService } from './productjason.service';

describe('ProductjasonService', () => {
  let service: ProductjasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductjasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
