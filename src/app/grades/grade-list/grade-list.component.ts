import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";

import {Grade} from "../../interfaces/grade.interface";
import {GradeService} from "../../services/grade.service";

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})
export class GradeListComponent implements OnInit {

  grades: Grade[];
  selectionState: boolean = false;

  selectedItem;
  selection: Grade;
  selectionId: string ;
  constructor(private gradeService: GradeService) {


    ///this.selectionState = false;


    this.onGetGrades();

    //this.setSelection();

  }

  ngOnInit() {

  }

  setSelection(){

    this.selection = this.grades[0];
    this.selectionState = !this.selectionState;
  }

  onGetGrades(){


    this.gradeService.getGrades()
        .subscribe(
            (grades: Grade[]) => this.grades = grades ,
            (error: Response) => console.log(error)
        );

  }

}
