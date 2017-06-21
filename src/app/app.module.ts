import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GradeListComponent } from './grades/grade-list/grade-list.component';
import {AppRoutingModule} from "./app-routing.module";
import {GradeService} from "./services/grade.service";
import {SubjectService} from "./services/subject.service";
import { GradeComponent } from './grades/grade/grade.component';
import {QuestionService} from "./question.service";
import { QuizParentComponent } from './quiz/quiz-parent/quiz-parent.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { ShowResultComponent } from './quiz/show-result/show-result.component';
import {AdminModule} from "./admin/admin.module";
import {QuestionsModule} from "./questions/questions.module";
import {QuizModule} from "./quiz/quiz.module";
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from "./login-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    GradeListComponent,
    GradeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginRoutingModule,
    QuizModule,
    QuestionsModule,
    AdminModule,
    AppRoutingModule,

  ],

  exports: [

  ],


  providers: [
      GradeService,
      SubjectService,
      QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
