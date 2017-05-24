import {Component, OnInit, Input} from '@angular/core';
import {Response} from "@angular/http";

import {Subject} from "../../interfaces/subject.interface";
import {SubjectService} from "../../services/subject.service";



@Component({
  selector: 'app-subject-menu',
  templateUrl: './subject-menu.component.html',
  styleUrls: ['./subject-menu.component.css']
})
export class SubjectMenuComponent implements OnInit {
  @Input() grade_id: number;

  subjects: Subject[];

  subject_id: number;



  constructor( private subjectService: SubjectService) { }

  ngOnInit() {



    this.getSubjects(+this.grade_id);

  }


  getSubjects(grade_id: number){

    this.subjectService.getSubjects(grade_id)
        .subscribe(
            (subjects: Subject[]) => {
              this.subjects = subjects;
              this.subject_id = this.subjects[0].id;
            },
            (error: Response) => console.log(error)
        )
  }


}
