import { TestBed } from '@angular/core/testing';

import { VetParticipantsService } from './vet-participants.service';

describe('VetParticipantsService', () => {
  let service: VetParticipantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetParticipantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
