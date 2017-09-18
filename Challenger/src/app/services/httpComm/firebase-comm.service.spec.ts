import { TestBed, inject } from '@angular/core/testing';

import { FirebaseCommService } from './firebase-comm.service';

describe('FirebaseCommService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseCommService]
    });
  });

  it('should be created', inject([FirebaseCommService], (service: FirebaseCommService) => {
    expect(service).toBeTruthy();
  }));
});
