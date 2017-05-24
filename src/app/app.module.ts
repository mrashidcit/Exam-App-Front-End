import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GradeListComponent } from './grades/grade-list/grade-list.component';
import {routing} from "./app.routing";
import {GradeService} from "./services/grade.service";

import {SubjectService} from "./services/subject.service";



import { QuestionComponent } from './questions/question/question.component';

import { AdminComponent } from './admin/admin.component';
import { GradeComponent } from './grades/grade/grade.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { SubjectMenuComponent } from './subjects/subject-menu/subject-menu.component';
import { GradeMenuComponent } from './grades/grade-menu/grade-menu.component';
import {NewQuestionComponent} from "./new-question/new-question.component";
import {QuestionService} from "./question.service";





@NgModule({
  declarations: [
    AppComponent,
    GradeListComponent,
    NewQuestionComponent,


    QuestionComponent,

    AdminComponent,
    GradeComponent,
    SubjectComponent,
    SubjectMenuComponent,
    GradeMenuComponent
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
