
import {Routes, RouterModule} from "@angular/router";


import {ModuleWithProviders} from "@angular/core";


import {QuestionComponent} from "./questions/question/question.component";
import {AdminComponent} from "./admin/admin.component";
import {NewQuestionComponent} from "./new-question/new-question.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo:'/admin', pathMatch:"full" },
    {path: 'admin', component:AdminComponent},

    {path: 'new-question', component:NewQuestionComponent},
    {path: 'question', component:QuestionComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)