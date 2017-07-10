import {
    Component, OnInit, OnChanges, 
    ViewChild, EventEmitter, Input, 
    Output} from '@angular/core';

import {Question} from "../../interfaces/question.interface";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogService} from "../../services/dialog.service";
import {Observable} from "rxjs";

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
      this.startTimer();
  }

    // Timer & Counter work

    questionTime: number = 60;
    counter: number = this.questionTime;
    timer;
    subscription; // contains subscription of the Observable.Timer()


    startTimer(){

        this.timer = Observable.timer(0, 1000);
        this.subscription =  this.timer.subscribe(t => {
            this.counter--;

            if(this.counter === 0){
                this.resetCounter();
                this.allowSaveAndNext();
                this.next();
                console.log('Move Next');
                //this.question.user_answer = 'f';
            }


        });

    } // end startTimer()

    stopTimer(){
        this.subscription.unsubscribe();
    }

    resetCounter(){
        this.counter = this.questionTime;
    }




    allowSaveAndNext(){
    this.allowSaveNext = true;

  }

  setAnswer(answer: string) {
    this.question.user_answer = answer;
    //console.log("Answer = " + answer);

  }

  checkandMarkQuestion(){

      if(!this.isQuestionNoValid()){
          this.stopTimer();
          return;
      }
      //let user_answer = this.question.user_answer ? this.question.user_answer : 'e';
      let correct_option = !this.question.correct_option ? this.question.correct_option : 'nothing';
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

    this.resetCounter();

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
