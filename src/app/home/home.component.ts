import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Grade } from '../interfaces/grade.interface';
import { Subject } from '../interfaces/subject.interface';
import { GradeAndSubjectService } from '../services/grade-and-subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  constructor(
    private gradeAndSubject: GradeAndSubjectService
    ) { }

  ngOnInit() {
    this.currentGrade = this.gradeAndSubject.getGrade();

  }

  
  currentGrade: Grade;

  // get Grade from grade-menu component
  getGradefromGradeMenu(grade: Grade){
    console.log("In getGradeFromGradeMenu()");
    this.currentGrade = grade;
    console.log("in getGradeFromGradeMenu()");
    
  }

  currentSubject: Subject;

  // get Subject from subject-menu component
  getSubjectFromSubjectMenu(subject: Subject){
    this.currentSubject = subject;
  }

  

}
