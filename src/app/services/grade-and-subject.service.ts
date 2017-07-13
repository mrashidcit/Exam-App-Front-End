import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { Board } from '../interfaces/board.interface';
import { Grade } from '../interfaces/grade.interface';
import { Subject } from '../interfaces/subject.interface';
import { Year } from '../interfaces/year.interface';

@Injectable()
export class GradeAndSubjectService {

  currentGrade: Grade;
  currentSubject: Subject;



  quizStatus: boolean = true;
  paperStatus: boolean;

  constructor() { }

  // Setter methods

  setGrade(grade: Grade){
    this.currentGrade = grade;

  }

  setSubject(subject: Subject){
    this.currentSubject = subject;
  }

  setQuizStatus(quiz: boolean){
    this.resetFlags();
    this.quizStatus = quiz;
  }

  setPaperStatus(paper: boolean){
    this.resetFlags();
    this.paperStatus = paper;
  }

  // Getter methods

  getGrade(){
    return this.currentGrade;
  }

  getSubject(){
    return this.currentSubject;
  }

  getQuizStatus(){
    return this.quizStatus;
  }

  getPaperStatus(){
    return this.paperStatus;

  }

  // Reset All Flags
  resetFlags(){
    this.quizStatus = false;
    this.paperStatus = false;

  }




  currentBoard: Board;
  currentYear: Year;

  // Setter Methods

  setBoard(board: Board){

    this.currentBoard = board;


  }

  setYear(year: Year){
    this.currentYear = year;
  }

  // Getter Methods

  getBoard(){

    return this.currentBoard;
  }

  getYear(){
    return this.currentYear;
  }








}
