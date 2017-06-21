import {NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {QuestionComponent} from "./questions/question/question.component";
import {NewQuestionComponent} from "./admin/new-question/new-question.component";
//import {QuestionListComponent} from "./questions/question-list/question-list.component";
import {QuizParentComponent} from "./quiz/quiz-parent/quiz-parent.component";


const appRoutes: Routes = [
    {path: '', redirectTo:'/quiz', pathMatch:"full" },


    {path: 'quiz', component:QuizParentComponent},


];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})

export class AppRoutingModule { }
