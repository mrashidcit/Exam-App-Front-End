import {NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {QuestionComponent} from "./questions/question/question.component";
import {NewQuestionComponent} from "./admin/new-question/new-question.component";
//import {QuestionListComponent} from "./questions/question-list/question-list.component";
import {QuizParentComponent} from "./quiz/quiz-parent/quiz-parent.component";
import {CanDeactivateGuard} from "./services/can-deactivate-guard.service";





const appRoutes: Routes = [
    //{path: '', redirectTo:'/quiz', pathMatch:"full" },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
        
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactivateGuard

    ]
})

export class AppRoutingModule { }
