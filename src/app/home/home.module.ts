
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { MaterialComponentModule } from '../shared/material-component/material-component.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SelectBoardAndYearComponent } from './select-board-and-year/select-board-and-year.component';
import { SelectGradeAndSubjectComponent } from './select-grade-and-subject/select-grade-and-subject.component';


@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    //FormsModule,
    MaterialComponentModule,
    HttpModule,
    HomeRoutingModule,
    SharedModule,

  ],
  declarations: [
    SelectBoardAndYearComponent, 
    
    HomeComponent,
    SelectGradeAndSubjectComponent
  ],
})
export class HomeModule { }
