import { TestBed } from '@angular/core/testing';

import { UtildataService } from './utildata.service';

describe('UtildataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtildataService = TestBed.get(UtildataService);
    expect(service).toBeTruthy();
  });
});
