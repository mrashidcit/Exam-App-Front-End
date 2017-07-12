import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Grade } from '../interfaces/grade.interface';
import { Subject } from '../interfaces/subject.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  constructor() { }

  ngOnInit() {
  }

  
  currentGrade: Grade;

  // get Grade from grade-menu component
  getGradefromGradeMenu(grade: Grade){
    this.currentGrade = grade;
    
  }

  currentSubject: Subject;

  // get Subject from subject-menu component
  getSubjectFromSubjectMenu(subject: Subject){
    this.currentSubject = subject;
  }

  // Send Grade Object to the Ouput of the component
  sendGrade(){
    
  }

}
