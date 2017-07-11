import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdIconModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    MdIconModule,
    MdNativeDateModule,
    ReactiveFormsModule,

  ],
  exports: [
    MaterialModule,
    MdIconModule,
    MdNativeDateModule,
    ReactiveFormsModule,
  ],

  declarations: [],
  
  
})
export class MaterialComponentModule { }
