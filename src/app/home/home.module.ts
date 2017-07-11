
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SelectBoardAndYearComponent } from './select-board-and-year/select-board-and-year.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    //FormsModule,
    HttpModule,
    HomeRoutingModule,

  ],
  declarations: [
    SelectBoardAndYearComponent, 
    HomeComponent
  ],
})
export class HomeModule { }
