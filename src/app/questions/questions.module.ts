import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { QuestionsComponent } from './questions.component';
import {QuestionListComponent} from "./question-list/question-list.component";
import {QuestionComponent} from "./question/question.component";
import {EditQuestionComponent} from "./edit-question/edit-question.component";
import {QuestionsRoutingModule} from "./questions-routing.module";
import { SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        QuestionsRoutingModule,

    ],
    declarations: [
        QuestionListComponent,
        QuestionComponent,
        EditQuestionComponent,
        QuestionsComponent,

    ],

    exports: [
        QuestionListComponent,
        QuestionsComponent,
        EditQuestionComponent,

    ],

    providers: [

    ]

})

export class QuestionsModule { }