import { Component, OnInit, Input, ViewChild } from '@angular/core';


import {Question} from "../../interfaces/question.interface";
import {QuestionService} from "../../question.service";
import { Board } from '../../interfaces/board.interface';
import { Grade } from '../../interfaces/grade.interface';
import { Subject } from '../../interfaces/subject.interface';
import { Year } from '../../interfaces/year.interface';
// ViewChild add



@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {


  question: Question; // Contains values of current question entries
  //grades: Grade[];
  //subjects: Subject[];

  allow_new_question: boolean = false;

  submitted = false;

  showMsg = false;

  constructor(
      private questionService: QuestionService) {


  }

  ngOnInit() {

  }

  // Setting board_id, year_id & class_id of question
  setQuestionIds(){
    this.question.board_id = this.currentBoard.id; //board
    this.question.year_id = this.currentYear.id; //year
    this.question.class_id = this.currentGrade.id; //class
  }


  add(question: Question): void {


    this.questionService.create(question)
        .then(
            question => this.question = question

        );
  }

  @ViewChild("myQuestion") txtArea;


  onSubmit(): void {

    this.submitted = true;

    this.setQuestionIds(); // setting required Ids of question

    console.log(this.question);

    this.questionService.create(this.question)
        .then(question => {
              this.question = question;
              this.showMsg = true;

               setTimeout(() => {
                 this.showMsg = false;

               }, 5000);

              this.setFocusonQuestionTextBox();

              // now reseting question Object
              this.question = new Question(this.currentSubject.id)
            }


        );

  } // end onSubmit()


  setFocusonQuestionTextBox(){
    // Setting Focus on Question TextArea
    this.txtArea.nativeElement.focus();



  }

  showMessage(){
    this.showMsg = true;

    setTimeout(
        () => {this.showMsg = false;}, 3000);

  }



  currentGrade: Grade;

  // Grade from grade-menu component
  getGrade(grade: Grade){
    this.currentGrade = grade;

  }

  currentSubject: Subject;

  // get Subject from subject-menu component
  getSubjectfromSubjectMenu(subject: Subject){
    this.currentSubject = subject;

  }


  currentBoard: Board;

  // get from Menu
  getBoardFromMenu(board: Board){
    console.log(board);
    this.currentBoard = board;

  }

  currentYear: Year;

  // Year from Menu
  getYearFromMenu(year: Year){
    console.log(year);
    this.currentYear = year;

  }

  allowNewQestionToggle(){
    this.allow_new_question =
        this.allow_new_question ? false : true;

    console.log(this.currentBoard);
    console.log(this.currentYear);

    if(this.currentSubject && this.allow_new_question){
      this.question = new Question(this.currentSubject.id);
      //this.setFocusonQuestionTextBox();
    }


  }




}
