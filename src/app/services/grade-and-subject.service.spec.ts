import { TestBed, inject } from '@angular/core/testing';

import { GradeAndSubjectService } from './grade-and-subject.service';

describe('GradeAndSubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GradeAndSubjectService]
    });
  });

  it('should be created', inject([GradeAndSubjectService], (service: GradeAndSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
