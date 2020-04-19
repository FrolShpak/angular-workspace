import { TestBed } from '@angular/core/testing';

import { PowerhouseApiService } from './powerhouse-api.service';

describe('PowerhouseApiService', () => {
  let service: PowerhouseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerhouseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
