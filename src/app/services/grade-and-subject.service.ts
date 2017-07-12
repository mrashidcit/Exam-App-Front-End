import { Injectable } from '@angular/core';
import { Grade } from '../interfaces/grade.interface';
import { Subject } from '../interfaces/subject.interface';

@Injectable()
export class GradeAndSubjectService {

  currentGrade: Grade;
  currentSubject: Subject;

  constructor() { }

  // Setter methods

  setGrade(grade: Grade){
    this.currentGrade = grade;
    
  }

  setSubject(subject: Subject){
    this.currentSubject = subject;
  }

  // Getter methods

  getGrade(){
    return this.currentGrade;
  }

  getSubject(){
    return this.currentSubject;
  }

  

}
