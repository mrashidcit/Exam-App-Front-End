import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import {routing} from "./app.routing";
import {GradeService} from "./grade.service";
import { SubjectListComponent } from './subject-list/subject-list.component';
import {SubjectService} from "./services/subject.service";
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import {QuestionService} from "./question.service";
import { QuestionComponent } from './question/question.component';




@NgModule({
  declarations: [
    AppComponent,
    GradeListComponent,
    SubjectListComponent,
    NewQuestionComponent,
    QuestionListComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
      GradeService,
      SubjectService,
      QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
