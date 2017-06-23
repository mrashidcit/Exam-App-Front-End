

import {Routes, RouterModule, CanDeactivate} from "@angular/router";

import {QuizParentComponent} from "./quiz-parent/quiz-parent.component";
import {NgModule} from "@angular/core";
import {CanDeactivateGuard} from "../services/can-deactivate-guard.service";

const quizRoutes: Routes = [
    {
        path: 'quiz',
        component: QuizParentComponent,
        canDeactivate: [CanDeactivateGuard]

    }
];

@NgModule({
    imports: [
        RouterModule.forChild(quizRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})

export class QuizRoutingModule { }