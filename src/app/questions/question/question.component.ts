import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";


import {QuestionService} from "../../question.service";
import {Question} from "../../interfaces/question.interface";


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: Question;

  constructor(
      private questionService: QuestionService,

  ) { }

  ngOnInit(): void {


      /*this.route.params
          .switchMap((params: Params) => this.questionService.getQuestion(+params['id']))
          .subscribe(question => this.questiono = question);
*/

  }

  onGetQuestion(): void {
    this.questionService.getQuestion(1)
        .then(question => this.question = question);

  }

}
