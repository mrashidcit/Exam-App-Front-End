import { Component, OnInit } from '@angular/core';
import {Subject} from "../interfaces/subject.interface";
import {SubjectService} from "../services/subject.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects: Subject[];
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
  }

  onGetGrades(){
    this.subjectService.getSubjects()
        .subscribe(
            (subjects: Subject[]) => this.subjects = subjects,
            (error: Response) => console.log(error)
        );
  }

}
