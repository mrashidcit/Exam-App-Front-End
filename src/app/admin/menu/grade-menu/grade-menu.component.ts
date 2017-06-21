import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {Response} from "@angular/http";

import {Grade} from "../../../interfaces/grade.interface";
import {GradeService} from "../../../services/grade.service";





@Component({
  selector: 'app-grade-menu',
  templateUrl: './grade-menu.component.html',
  styleUrls: ['./grade-menu.component.css']
})
export class GradeMenuComponent implements OnInit {

  @Output() sendGrade = new EventEmitter<Grade>();

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
              this.send();
            },
            (error: Response) => console.log(error)
        );
  }


  checkGrade(grade: any): Grade {
      if (grade.id === this.grade_id){
          return grade;
      }
  }


  // Send Grade Object to the Output of the component
  send(){

      let grades = this.grades
          .filter((grade: Grade) => grade.id === +this.grade_id);

      this.selectedGrade = grades[0];
      this.sendGrade.emit(this.selectedGrade);

  }

}
