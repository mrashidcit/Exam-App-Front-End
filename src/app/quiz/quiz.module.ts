import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {QuizComponent} from "./quiz/quiz.component";
import {ShowResultComponent} from "./show-result/show-result.component";
import {SharedModule} from "../shared/shared.module";
import {QuizParentComponent} from "./quiz-parent/quiz-parent.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        SharedModule,


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