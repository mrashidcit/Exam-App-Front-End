import { Component, OnInit } from '@angular/core';


import {QuestionService} from "../../question.service";
import {Grade} from "../../interfaces/grade.interface";
import {Subject} from "../../interfaces/subject.interface";
import {Response} from "@angular/http";
import {Question} from "../../interfaces/question.interface";

@Component({
  selector: 'app-quiz-parent',
  templateUrl: './quiz-parent.component.html',
  styleUrls: ['./quiz-parent.component.css']
})
export class QuizParentComponent implements OnInit {

  questions: Question[];

  currentQuestion: Question;

  questionNo: number = 0;

  showQuizForm: boolean = false;

  constructor(
      private questionService: QuestionService
  ) { }

  ngOnInit() {
  }

  currentGrade: Grade;

  // get Grade from grade-menu component
  getGradefromGradeMenu(grade: Grade){
    this.currentGrade = grade;
  }

  currentSubject: Subject;

  // get Subject form subject-menu component
  getSubjectFromSubjectMenu(subject: Subject){
    this.currentSubject = subject;
  }

  getQuestionList() {
    this.questionService.getQuestionList(this.currentSubject.id)
        .subscribe(
            (questions: Question[]) => {
              this.questions = questions;
              this.currentQuestion = this.questions[this.questionNo++];
              this.toggleShowQuizForm();

            },
            (error: Response) => console.log(error)

        );

  } // end getQuizQuestionList

  saveAndNext(question: Question){

    this.currentQuestion = this.questions[this.questionNo++];

  }

  toggleShowQuizForm(){
    this.showQuizForm = !this.showQuizForm;
  }

  startQuiz(){
    this.getQuestionList();

  }



  moveOnNextQuestion(moveNext: boolean){

    if(moveNext){
      this.currentQuestion = this.questions[this.questionNo++];

    }

  }


  isQuestionNoValid(): boolean{

    if(this.questionNo > this.questions.length){

        return false;

    } else {
        return true;

    }
  }

  result: boolean = false;

  showResult() {
      this.result = true;
  }



}
