import { GradeAndSubjectService } from '../../services/grade-and-subject.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-repo-management',
  templateUrl: './exam-repo-management.component.html',
  styleUrls: ['./exam-repo-management.component.css']
})
export class ExamRepoManagementComponent implements OnInit {

  constructor(
      private gradeAndSubject: GradeAndSubjectService
  ) { }

  ngOnInit() {
    this.gradeAndSubject.currentBoard;


  }

}
