
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { QuizModule } from '../quiz/quiz.module';
import { GradeAndSubjectService } from '../services/grade-and-subject.service';
import { MaterialComponentModule } from '../shared/material-component/material-component.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { SelectBoardAndYearComponent } from './select-board-and-year/select-board-and-year.component';
import { SelectGradeAndSubjectComponent } from './select-grade-and-subject/select-grade-and-subject.component';
import { HomeComponent } from "app/home/home.component";


@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    //FormsModule,
    MaterialComponentModule,
    HttpModule,
    HomeRoutingModule,
    SharedModule,
    QuizModule

  ],  
  declarations: [
    SelectBoardAndYearComponent, 
    
    HomeComponent,
    SelectGradeAndSubjectComponent,
    QuizComponent
  ],

  providers: [
    GradeAndSubjectService,
  ]
})
export class HomeModule { }
