import { TestBed } from '@angular/core/testing';

import { HorseRegistrarionService } from './horse-registrarion.service';

describe('HorseRegistrarionService', () => {
  let service: HorseRegistrarionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorseRegistrarionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
