import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { BoardService } from '../services/board.service';
import { YearService } from '../services/year.service';
import { BoardMenuComponent } from './board-menu/board-menu.component';
import { GradeMenuComponent } from './grade-menu/grade-menu.component';
import { MaterialComponentModule } from './material-component/material-component.module';
import { SubjectMenuComponent } from './subject-menu/subject-menu.component';
import { YearMenuComponent } from './year-menu/year-menu.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialComponentModule,

    ],
    declarations: [
        GradeMenuComponent,
        SubjectMenuComponent,
        BoardMenuComponent,
        YearMenuComponent,

    ],
    exports: [
        GradeMenuComponent,
        SubjectMenuComponent,
        BoardMenuComponent,
        YearMenuComponent,

    ],

    providers: [
      BoardService,
      YearService

    ]

})
export class SharedModule { }
