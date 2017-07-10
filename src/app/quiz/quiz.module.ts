import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {QuizComponent} from "./quiz/quiz.component";
import {ShowResultComponent} from "./show-result/show-result.component";
import {SharedModule} from "../shared/shared.module";
import {QuizParentComponent} from "./quiz-parent/quiz-parent.component";
import {QuizRoutingModule} from "./quiz-routing.module";
import { MaterialComponentModule } from "app/shared/material-component/material-component.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialComponentModule,
        SharedModule,
        QuizRoutingModule,


    ],
    declarations: [
        QuizParentComponent,
        QuizComponent,
        ShowResultComponent,


    ],
    exports: [
        QuizComponent,
        ShowResultComponent,
        QuizParentComponent,

    ]

})
export class QuizModule { }