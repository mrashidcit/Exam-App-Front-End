import { Component, OnInit } from '@angular/core';
import {Question} from "../../interfaces/question.interface";
import {QuestionService} from "../../question.service";
import {Subject} from "../../interfaces/subject.interface";
import {Grade} from "../../interfaces/grade.interface";
import {Response} from "@angular/http";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[];

  selectedQuestion: Question;

  showEdit: boolean = false;



  constructor(
      private questionService: QuestionService,

  ) { }

  ngOnInit() {
  }

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

  getQuestionList() {
    this.questionService.getQuestionList(this.currentSubject.id)
        .subscribe(
            (questions: Question[]) => {
              this.questions = questions
            },
            (error: Response) => console.log(error)

        );
  }

  selectQuestion(question: Question){
    this.selectedQuestion = question;
    this.showEdit = true;

  }

  receiveShowEditStatus(showEdit: boolean){
    this.showEdit = showEdit;
    console.log("receiveShowEditStatus = " + showEdit ? showEdit : 'Null showEdit');
  }


}
