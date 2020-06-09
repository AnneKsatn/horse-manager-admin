import { TestBed } from '@angular/core/testing';

import { CategoryConsistService } from './category-consist.service';

describe('CategoryConsistService', () => {
  let service: CategoryConsistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryConsistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
