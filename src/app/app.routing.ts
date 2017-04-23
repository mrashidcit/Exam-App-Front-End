
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {GradeListComponent} from "./grade-list/grade-list.component";
import {ModuleWithProviders} from "@angular/core";
import {SubjectListComponent} from "./subject-list/subject-list.component";
import {NewQuestionComponent} from "./new-question/new-question.component";
import {QuestionComponent} from "./question/question.component";

const APP_ROUTES: Routes = [
    //{path: '', component:AppRoot},
    {path: 'grade-list', component:GradeListComponent},
    {path: 'subject-list', component:SubjectListComponent},
    {path: 'new-question', component:NewQuestionComponent},
    {path: 'question', component:QuestionComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)