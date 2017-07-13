import { Component, OnInit, Input, Output } from '@angular/core';

import { Grade } from '../../interfaces/grade.interface';
import { Question } from '../../interfaces/question.interface';
import { Subject } from '../../interfaces/subject.interface';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-show-paper',
  templateUrl: './show-paper.component.html',
  styleUrls: ['./show-paper.component.css']
})
export class ShowPaperComponent implements OnInit {
  @Input() currentGrade: Grade;
  @Input() currentSubject: Subject;

  questions: Question[];

  loading: boolean = true;
  total_questions: number = 0;

  toggleLoading(){
    this.loading = !this.loading;
  }


  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.getQuestions();
  }


  getQuestions() {
    this.questionService.getQuestions()
      .subscribe(
        (questions: Question[]) => {
          this.questions = questions;
          this.toggleLoading();
          this.total_questions = this.questions.length;
          console.log(questions);
          
        },
        (error: Response) => console.log(error)
      );
  } // end getQuestions()



}
