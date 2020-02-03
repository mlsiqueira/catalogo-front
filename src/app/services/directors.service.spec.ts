import { TestBed } from '@angular/core/testing';

import { DirectorsService } from './directors.service';

describe('DirectorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectorsService = TestBed.get(DirectorsService);
    expect(service).toBeTruthy();
  });
});
