import { TestBed } from '@angular/core/testing';

import { FirebaseuiService } from './firebaseui.service';

describe('FirebaseuiService', () => {
  let service: FirebaseuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
