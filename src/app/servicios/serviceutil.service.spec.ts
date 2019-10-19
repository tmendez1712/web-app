import { TestBed } from '@angular/core/testing';

import { ServiceutilService } from './serviceutil.service';

describe('ServiceutilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceutilService = TestBed.get(ServiceutilService);
    expect(service).toBeTruthy();
  });
});
