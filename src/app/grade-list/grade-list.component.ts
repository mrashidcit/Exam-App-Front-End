import { Component, OnInit } from '@angular/core';
import {Grade} from "../grade.interface";
import {GradeService} from "../grade.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})
export class GradeListComponent implements OnInit {

  grades: Grade[];
  selectionState: boolean = false;
  items;
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
