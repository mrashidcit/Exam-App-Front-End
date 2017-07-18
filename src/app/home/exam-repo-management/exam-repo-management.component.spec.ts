import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRepoManagementComponent } from './exam-repo-management.component';

describe('ExamRepoManagementComponent', () => {
  let component: ExamRepoManagementComponent;
  let fixture: ComponentFixture<ExamRepoManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRepoManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRepoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
