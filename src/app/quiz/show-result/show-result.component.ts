

import { Component, Input, OnInit,  OnChanges, SimpleChanges } from '@angular/core';
//import { forEach } from '@angular/router/src/utils/collection';
import { Question } from '../../interfaces/question.interface';
import { of } from 'rxjs/observable/of';


@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent 
        implements OnInit, OnChanges {

  @Input() questions: Question[];

  no: number = 0;

  question: Question;

  constructor() { }

  total_marks : number = 0;
  obtain_marks : number = 0;


  ngOnInit() {
    this.total_marks = this.questions.length;

    for(let question of this.questions){
      if(question.correct){
        this.obtain_marks++;
      } // end if

    } // end for() loop

    console.log("Obtain_Marks = " + this.obtain_marks);
    console.log(this.questions)
  } // end ngOnInit()

  ngOnChanges(changes: SimpleChanges){
      
      
  }



}
