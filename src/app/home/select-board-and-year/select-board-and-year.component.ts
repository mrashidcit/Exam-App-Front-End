import { Board } from '../../interfaces/board.interface';
import { Year } from '../../interfaces/year.interface';
import { BoardService } from '../../services/board.service';
import { GradeAndSubjectService } from '../../services/grade-and-subject.service';
import { YearMenuComponent } from '../../shared/year-menu/year-menu.component';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-board-and-year',
  templateUrl: './select-board-and-year.component.html',
  styleUrls: ['./select-board-and-year.component.css']
})
export class SelectBoardAndYearComponent implements OnInit {

  boards: Board[];

  constructor(
    private gradeAndSubject: GradeAndSubjectService,
    private boardService: BoardService,
    private router: Router

  ) { }

  ngOnInit() {

  }

  // get Board from Menu
  getBoardFromBoardMenu(board: Board){
    this.gradeAndSubject.setBoard(board);

  }

  // get Year from Menu
  getYearFromYearMenu(year: Year){

    this.gradeAndSubject.setYear(year);

  }



  getQuiz(){
    this.gradeAndSubject.setQuizStatus(true);

    this.router.navigate(["./home/select-grade-and-subject"]);
  }

  getPaper(){
    this.gradeAndSubject.setPaperStatus(true);

    this.showLog();

    this.router.navigate(["./home/select-grade-and-subject"]);
  }

  showLog(){
    console.log(this.gradeAndSubject.getBoard());
    console.log(this.gradeAndSubject.getYear());

  }


}
