import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {QuestionsComponent} from "./questions.component";
import {QuestionListComponent} from "./question-list/question-list.component";
import {EditQuestionComponent} from "./edit-question/edit-question.component";

const questionRoutes: Routes = [
    {
        path: 'questions',
        component: QuestionsComponent,
        children: [
            { path: 'question-list', component: QuestionListComponent},
            { path: 'edit-question', component: EditQuestionComponent}
        ]
    }


];

@NgModule({
    imports: [
        RouterModule.forChild(questionRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class QuestionsRoutingModule { }