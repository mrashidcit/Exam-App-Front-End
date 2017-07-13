import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QuestionService } from '../question.service';
import { MaterialComponentModule } from '../shared/material-component/material-component.module';
import { PaperRoutingModule } from './paper-routing.module';
import { PaperComponent } from './paper.component';
import { ShowPaperComponent } from './show-paper/show-paper.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialComponentModule,
    HttpModule,
    PaperRoutingModule


  ],
  declarations: [
    PaperComponent, ShowPaperComponent
    
    ],

  exports: [
    ShowPaperComponent,

  ],
  providers: [
    QuestionService,
    
  ]
})
export class PaperModule { }
