import { Subject } from '../../interfaces/subject.interface';
import { Grade } from '../../interfaces/grade.interface';
import { Year } from '../../interfaces/year.interface';
import { Board } from '../../interfaces/board.interface';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ByIds } from "app/interfaces/byids.interface";
import { ExamRepo } from "app/interfaces/exam-repo.interface";
import { ExamRepoService } from "app/services/exam-repo.service";

@Component({
  selector: 'app-show-repo',
  templateUrl: './show-repo.component.html',
  styleUrls: ['./show-repo.component.css']
})
export class ShowRepoComponent implements OnInit, OnChanges {
  @Input() currentBoard: Board;
  @Input() currentYear: Year;
  @Input() currentGrade: Grade;
  @Input() currentSubject: Subject;

  byIds = {} as ByIds;

  server: string = "http://localhost:8000/";

  exams: ExamRepo[];

  constructor(
    private examRepoService: ExamRepoService
  ) { }

  ngOnInit() {




    this.getExamRepo();

  }

  ngOnChanges() {
    this.byIds.board_id = this.currentBoard.id;
    this.byIds.year_id  = this.currentYear.id;
    this.byIds.class_id  =  this.currentGrade.id;
    this.byIds.subject_id  =  this.currentSubject.id;

    console.log(this.byIds);

  }

  getExamRepo(){
    this.examRepoService.getExamRepo(this.byIds)
        .then(exams => {
            this.exams = exams;

            console.log(exams);
        });

  }

}
