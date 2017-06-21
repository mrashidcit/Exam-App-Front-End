import {Component, Output, OnInit, Input, OnChanges, EventEmitter} from '@angular/core';
import {Response} from "@angular/http";
import {Grade} from "../../interfaces/grade.interface";
import {Subject} from "../../interfaces/subject.interface";
import {SubjectService} from "../../services/subject.service";


@Component({
  selector: 'app-subject-menu',
  templateUrl: './subject-menu.component.html',
  styleUrls: ['./subject-menu.component.css']
})
export class SubjectMenuComponent implements OnInit, OnChanges {
  @Input() grade: Grade;
  @Output() sendSubject = new EventEmitter<Subject>();

  subjects: Subject[];

  subject_id: number;

  showSubjects: Subject[];

  currentSubject: Subject;



    constructor( private subjectService: SubjectService) { }

  ngOnChanges(){

        // Refresh the SubjectMenu if subjects are loaded
      if(this.subjects){
          this.refreshSubjectsMenu();
      }
  }

  ngOnInit() {


    this.getSubjects();



  }


  getSubjects(){

    this.subjectService.getSubjects()
        .subscribe(
            (subjects: Subject[]) => {
              this.subjects = subjects;

              this.showSubjects = this.subjects
                  .filter((subject: Subject) => subject.class_id === this.getGradeId());
              // Assign first id of showSubjects item to this.sbuject_id
              this.subject_id = this.showSubjects[0].id;
                this.setCurrentSubject();
                this.sendSubjectToNewQuestionComponent();



            },
            (error: Response) => console.log(error)
        )
  } // end getSubjects()


  // get Grade id
    getGradeId(){
        return this.grade ? +this.grade.id : 1;
    }


    refreshSubjectsMenu(){
        this.showSubjects = this.subjects
            .filter((subject: Subject) => subject.class_id === this.getGradeId());

        this.subject_id = this.showSubjects[0].id;
    }

    // Send Subject Object to Question Component
    sendSubjectToNewQuestionComponent(){

        this.sendSubject.emit(this.currentSubject);

    }


    // used to set CurrentSubject object during change in
    // dropdown menu
    setCurrentSubject(){
        let subjects =  this.showSubjects
            .filter((subject: Subject) => subject.id === +this.subject_id);

        this.currentSubject = subjects[0];



    }



}
