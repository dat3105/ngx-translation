import { TestBed } from '@angular/core/testing';

import { Language.ServiceService } from './language.service.service';

describe('Language.ServiceService', () => {
  let service: Language.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Language.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
