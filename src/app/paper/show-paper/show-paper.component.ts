import { Component, OnInit, Input, Output } from '@angular/core';

import { Board } from '../../interfaces/board.interface';
import { Grade } from '../../interfaces/grade.interface';
import { Question } from '../../interfaces/question.interface';
import { Subject } from '../../interfaces/subject.interface';
import { Year } from '../../interfaces/year.interface';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-show-paper',
  templateUrl: './show-paper.component.html',
  styleUrls: ['./show-paper.component.css']
})
export class ShowPaperComponent implements OnInit {
  @Input() currentBoard: Board;
  @Input() currentYear: Year;
  @Input() currentGrade: Grade;
  @Input() currentSubject: Subject;

  totalQuestions: number;

  questions: Question[];

  // show Answer set to true when user click
  // on showAnswer Button and Answer will be show
  // to the user
  showAnswer: boolean[] = [];

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
          this.totalQuestions = this.questions.length;
          console.log(questions);

        },
        (error: Response) => console.log(error)
      );
  } // end getQuestions()

  setShowAnswer(index: number){
    console.log("index = " + index);
    this.showAnswer[index] = true;
  }



}
