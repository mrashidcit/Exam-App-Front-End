import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Grade } from "../../interfaces/grade.interface";
import { Subject } from "../../interfaces/subject.interface";


@Component({
  selector: 'app-select-grade-and-subject',
  templateUrl: './select-grade-and-subject.component.html',
  styleUrls: ['./select-grade-and-subject.component.css']
})
export class SelectGradeAndSubjectComponent implements OnInit {

@Output() sendGrade = new EventEmitter<Grade>();
  
  constructor() { }

  ngOnInit() {
  }

  currentGrade: Grade;
  getGradeFromGradeMenu(grade: Grade){
    this.currentGrade = grade;
  }

  currentSubject: Subject;

  // get Subject from subject-menu component
  getSubjectFromSubjectMenu(subject: Subject){
    this.currentSubject = subject;
  }


  
}
