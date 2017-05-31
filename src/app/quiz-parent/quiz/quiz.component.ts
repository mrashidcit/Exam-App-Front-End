import {Component, OnInit, OnChanges, ViewChild, EventEmitter} from '@angular/core';
import {Input, Output} from "@angular/core/src/metadata/directives";
import {Question} from "../../interfaces/question.interface";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnChanges {

  @Input() question: Question;

  @Output() moveNext = new EventEmitter<boolean>();

  allowSaveNext: boolean = false;


  constructor() { }

  ngOnChanges() {
    console.log(this.question);
  }

  ngOnInit() {
  }

  allowSaveAndNext(){
    this.allowSaveNext = true;

  }

  setAnswer(answer: string) {
    this.question.user_answer = answer;
    console.log("Answer = " + answer);


  }

  @ViewChild("choice")
  next(){
    this.moveNext.emit(this.allowSaveNext);

  }

}
