import { TestBed } from '@angular/core/testing';

import { RestsService } from './rests.service';

describe('RestsService', () => {
  let service: RestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
