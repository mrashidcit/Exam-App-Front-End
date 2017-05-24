import {Component, OnInit, EventEmitter} from '@angular/core';
import {Response} from "@angular/http";

import {Grade} from "../../interfaces/grade.interface";
import {GradeService} from "../../services/grade.service";
import {Output} from "@angular/core/src/metadata/directives";


@Component({
  selector: 'app-grade-menu',
  templateUrl: './grade-menu.component.html',
  styleUrls: ['./grade-menu.component.css']
})
export class GradeMenuComponent implements OnInit {

  @Output() sendGradeId = new EventEmitter<number>();

  grades: Grade[];

  constructor(private gradeService: GradeService) { }

  ngOnInit() {
    this.getGrades();


  }


    selectedGrade: Grade;
    grade_id: number;

    getGrades() {
    this.gradeService.getGrades()
        .subscribe(
            (grades: Grade[]) => {
              this.grades = grades;
              this.selectedGrade = this.grades[0];
              this.grade_id = this.grades[0].id;
            },
            (error: Response) => console.log(error)
        );
  }

  send(){
      this.sendGradeId.emit(this.grade_id);

  }

}
