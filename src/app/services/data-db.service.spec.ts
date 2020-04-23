import { TestBed } from '@angular/core/testing';

import { DataDbService } from './data-db.service';

describe('DataDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDbService = TestBed.get(DataDbService);
    expect(service).toBeTruthy();
  });
});
