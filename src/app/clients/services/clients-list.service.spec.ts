import { TestBed, inject } from '@angular/core/testing';

import { ClientsListService } from './clients-list.service';

describe('ClientsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsListService]
    });
  });

  it('should be created', inject([ClientsListService], (service: ClientsListService) => {
    expect(service).toBeTruthy();
  }));
});
