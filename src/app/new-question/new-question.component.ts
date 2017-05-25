import { Component, OnInit } from '@angular/core';
import {Question} from "../interfaces/question.interface";
import {QuestionService} from "../question.service";
import {GradeService} from "../services/grade.service";
import {Grade} from "../interfaces/grade.interface";
import {Subject} from "../interfaces/subject.interface";
import {Response} from "@angular/http";
import {SubjectService} from "../services/subject.service";
import {Input} from "@angular/core/src/metadata/directives";
import {element, ElementFinder} from "protractor";
import {Element} from "@angular/compiler/src/ml_parser/ast";
import {DomAdapter} from "@angular/platform-browser/src/dom/dom_adapter";


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {


  question: Question; // Contains values of current question entries
  grades: Grade[];
  subjects: Subject[];

  allow_new_question: boolean = false;


  submitted = false;

  showMsg = false;


  grade_id: number;
  subject_id: number; // Store subjectId of currently selected subject

  constructor(
      private questionService: QuestionService,
      private gradeService: GradeService,
      private subjectService: SubjectService) {


  }

  ngOnInit() {

  }

  add(question: Question): void {
    console.log(question);

    this.questionService.create(question)
        .then(
            question => this.question = question

        );
  }

  onSubmit(): void {

    this.submitted = true;

    console.log(this.question);

    this.questionService.create(this.question)
        .then(question => {
              this.question = question;
              this.showMsg = true;

               setTimeout(() => {
                 this.showMsg = false;

               }, 5000);


              // now reseting question Object
              this.question = new Question(this.currentSubject.id)
            }


        );

  } // end onSubmit()

  myElement: DOM;

  my: HTMLElement;

  showMessage(){
    this.showMsg = true;

    setTimeout(() => {this.showMsg = false;}, 3000);



    this.my =  this.myElement.getElementsByClassName("textarea", "question")[0];

    console.log(this.my.innerText);

  }

  onGetGrades(){
    this.gradeService.getGrades()
        .subscribe(
            (grades: Grade[]) => this.grades = grades, //this.grades = grades,
            (error: Response) => console.log(error)
        );
  } // end onGetGrades()

  onGetSubjectofOneGrade(){
    this.subjectService.getSubjectofOneGrade(this.grade_id)
        .subscribe(
            (subjects: Subject[]) => (this.subjects = subjects,
                console.log(this.subjects),
                this.subject_id = this.subjects[0].id),
            (error: Response) => console.log(error)
        );
  } // end onGetSubjectofOneGrade()


  currentGrade: Grade;

  // get Grade from grade-menu component
  getGrade(grade: Grade){
    this.currentGrade = grade;

  }

  currentSubject: Subject;

  // get Subject from subject-menu component
  getSubjectfromSubjectMenu(subject: Subject){
    this.currentSubject = subject;

  }

  allowNewQestionToggle(){
    this.allow_new_question =
        this.allow_new_question ? false : true;

    if(this.currentSubject && this.allow_new_question){
      this.question = new Question(this.currentSubject.id);
    }


  }





}
