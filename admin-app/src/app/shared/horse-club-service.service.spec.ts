import { TestBed } from '@angular/core/testing';

import { HorseClubService } from './horse-club-service.service';

describe('HorseClubService', () => {
  let service: HorseClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorseClubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
