import { TestBed } from '@angular/core/testing';

import { SubjectService } from './subjects.service';

describe('SubjectsServiceTsService', () => {
  let service: SubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
