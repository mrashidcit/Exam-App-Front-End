import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdNativeDateModule } from '@angular/material';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradeListComponent } from './grades/grade-list/grade-list.component';
import { GradeComponent } from './grades/grade/grade.component';
import { HomeModule } from './home/home.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';
import { QuestionService } from './question.service';
import { QuestionsModule } from './questions/questions.module';
import { QuizParentComponent } from './quiz/quiz-parent/quiz-parent.component';
import { QuizRoutingModule } from './quiz/quiz-routing.module';
import { QuizModule } from './quiz/quiz.module';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { ShowResultComponent } from './quiz/show-result/show-result.component';
import { DialogService } from './services/dialog.service';
import { GradeService } from './services/grade.service';
import { SubjectService } from './services/subject.service';
import { MaterialComponentModule } from './shared/material-component/material-component.module';
import { SharedModule } from './shared/shared.module';
import 'HammerJS';





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
    MaterialComponentModule,
    SharedModule,
    HomeModule,
    LoginRoutingModule,
    QuizModule,
    QuestionsModule,
    QuizRoutingModule,
    AdminModule,
    AppRoutingModule,

  ],

  exports: [

  ],


  providers: [
      GradeService,
      SubjectService,
      QuestionService,
      DialogService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
