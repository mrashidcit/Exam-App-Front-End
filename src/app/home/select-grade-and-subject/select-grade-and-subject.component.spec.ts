import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGradeAndSubjectComponent } from './select-grade-and-subject.component';

describe('SelectGradeAndSubjectComponent', () => {
  let component: SelectGradeAndSubjectComponent;
  let fixture: ComponentFixture<SelectGradeAndSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGradeAndSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGradeAndSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
