import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../question.service";
import {Question} from "../interfaces/question.interface";
import {Response} from "@angular/http";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  onGetQuestions(){
    this.questionService.getQuestions()
        .subscribe(
            (questions: Question[]) => this.questions = questions,
            (error: Response) => console.log(error)
        );

  }

}
