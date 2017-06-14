import {Component, OnInit, OnChanges, ViewChild, EventEmitter} from '@angular/core';
import {Input, Output} from "@angular/core/src/metadata/directives";
import {Question} from "../../interfaces/question.interface";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnChanges {

  @Input() question: Question;

  @Input() questionNo: number;

  @Input() totalQuestions: number;


  @Output() moveNext = new EventEmitter<boolean>();

  allowSaveNext: boolean = false;

    // boolean variables for options

    opt1 : boolean = false;
    opt2 : boolean = false;
    opt3 : boolean = false;
    opt4 : boolean = false;



  constructor() { }

  ngOnChanges() {
    //console.log(this.question);


  }

  ngOnInit() {
  }

  allowSaveAndNext(){
    this.allowSaveNext = true;

  }

  setAnswer(answer: string) {
    this.question.user_answer = answer;
    //console.log("Answer = " + answer);

  }

  checkandMarkQuestion(){
      if (this.question.correct_option === this.question.user_answer){
          this.question.correct = true;
      } else {
          this.question.correct = false;
      }

  }


  next(){

    // check the question mark it is correct or incorrect
    this.checkandMarkQuestion();

    this.moveNext.emit(this.allowSaveNext);

    this.allowSaveNext = false;

  }

  // reset all Options values to false
  resetOptions(){
      this.opt1 = false;
      this.opt2 = false;
      this.opt3 = false;
      this.opt4 = false;

  }

  resetOpt1(){

      this.opt1 = !this.opt1;

  }

  isQuestionNoValid(): boolean{

      if(this.questionNo > this.totalQuestions){
          return false;
      } else {
          return true;
      }
  }





}
