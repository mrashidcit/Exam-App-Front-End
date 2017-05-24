import { Component, OnInit } from '@angular/core';
import {Question} from "../interfaces/question.interface";
import {QuestionService} from "../question.service";
import {GradeService} from "../services/grade.service";
import {Grade} from "../interfaces/grade.interface";
import {Subject} from "../interfaces/subject.interface";
import {Response} from "@angular/http";
import {SubjectService} from "../services/subject.service";

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  question: Question;
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

    this.onGetGrades();
    this.grade_id = 1;
    this.subject_id = 1;
    this.question = new Question(this.subject_id);
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
        .then(
            question => (this.question = question,
                    this.showMsg = true,

                    // now reseting question Object
                    this.question = new Question(this.subject_id)

              )
        );

    /*
    console.log(question);


    this.questionService.create(question)
        .then(
            question => this.question = question

        );
    */
  } // end onSubmit()

  onGetGrades(){
    this.gradeService.getGrades()
        .subscribe(
            (grades: Grade[]) => (this.grades = grades, console.log(this.grades)), //this.grades = grades,
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


  getGradeId(grade_id: number){
    console.log("Grade_id = " + grade_id);
  }

}
