
import {Routes, RouterModule} from "@angular/router";


import {ModuleWithProviders} from "@angular/core";


import {QuestionComponent} from "./questions/question/question.component";
import {AdminComponent} from "./admin/admin.component";
import {NewQuestionComponent} from "./new-question/new-question.component";
import {QuestionListComponent} from "./questions/question-list/question-list.component";
import {QuizParentComponent} from "./quiz-parent/quiz-parent.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo:'/quiz-parent', pathMatch:"full" },
    {path: 'admin', component:AdminComponent},

    {path: 'new-question', component:NewQuestionComponent},
    {path: 'question-list', component:QuestionListComponent},
    {path: 'question', component:QuestionComponent},

    {path: 'quiz-parent', component:QuizParentComponent},


];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)