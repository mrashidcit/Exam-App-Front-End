import { GradeAndSubjectService } from '../../services/grade-and-subject.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-board-and-year',
  templateUrl: './select-board-and-year.component.html',
  styleUrls: ['./select-board-and-year.component.css']
})
export class SelectBoardAndYearComponent implements OnInit {

  constructor(
    private gradeAndSubject: GradeAndSubjectService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getQuiz(){
    this.gradeAndSubject.setQuizStatus(true);
    console.log("in getQuiz()");

    this.router.navigate(["./home/select-grade-and-subject"]);
  }

  getPaper(){
    this.gradeAndSubject.setPaperStatus(true);

    this.router.navigate(["./home/select-grade-and-subject"]);
  }


}
