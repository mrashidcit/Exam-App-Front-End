
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Grade } from '../../interfaces/grade.interface';
import { Subject } from '../../interfaces/subject.interface';
import { GradeAndSubjectService } from '../../services/grade-and-subject.service';



@Component({
  selector: 'app-select-grade-and-subject',
  templateUrl: './select-grade-and-subject.component.html',
  styleUrls: ['./select-grade-and-subject.component.css']
})
export class SelectGradeAndSubjectComponent implements OnInit {

  constructor(
    private gradeAndSubject: GradeAndSubjectService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  getGradeFromGradeMenu(grade: Grade){

    this.gradeAndSubject.setGrade(grade);
  }

  currentSubject: Subject;

  // get Subject from subject-menu component
  getSubjectFromSubjectMenu(subject: Subject){

    this.gradeAndSubject.setSubject(subject);

  }





}
