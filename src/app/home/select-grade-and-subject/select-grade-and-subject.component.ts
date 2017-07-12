import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    private gradeAndSubject: GradeAndSubjectService
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

  showGrade(){
    console.log(this.gradeAndSubject.getGrade());
    console.log(this.gradeAndSubject.getSubject());
  }


  
}
