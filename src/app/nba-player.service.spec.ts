import { TestBed } from '@angular/core/testing';

import { NbaPlayerService } from './nba-player.service';

describe('NbaPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NbaPlayerService = TestBed.get(NbaPlayerService);
    expect(service).toBeTruthy();
  });
});
