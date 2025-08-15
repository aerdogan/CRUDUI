import { TestBed } from '@angular/core/testing';

import { Rentservice } from './rentservice';

describe('Rentservice', () => {
  let service: Rentservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rentservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
