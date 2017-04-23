import { Component, OnInit } from '@angular/core';
import {Question} from "../interfaces/question.interface";
import {QuestionService} from "../question.service";

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  question: Question;

  submitted = false;


  subject_id: number; // Store subjectId of currently selected subject

  constructor(private questionService: QuestionService) {
    this.subject_id = 1;
    this.question = new Question(this.subject_id);
  }

  ngOnInit() {
  }

  add(question: Question): void {
    console.log(question);

    this.questionService.create(question)
        .then(
            question => this.question = question



        );
  }

  onSubmit(): void {

    this.submitted = true;

    console.log(this.question);

    this.questionService.create(this.question)
        .then(
            question => (this.question = question,
            console.log('Successfully Saved'),
            this.submitted = false)
        );

    /*
    console.log(question);


    this.questionService.create(question)
        .then(
            question => this.question = question

        );
    */
  }

}
