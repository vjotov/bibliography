import { TestBed, inject } from '@angular/core/testing';

import { BibitemService } from './bibitem.service';

describe('BibitemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibitemService]
    });
  });

  it('should be created', inject([BibitemService], (service: BibitemService) => {
    expect(service).toBeTruthy();
  }));
});
