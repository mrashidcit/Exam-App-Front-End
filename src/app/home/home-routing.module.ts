
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamRepoManagementComponent } from './exam-repo-management/exam-repo-management.component';
import { SelectBoardAndYearComponent } from "./select-board-and-year/select-board-and-year.component";
import { SelectGradeAndSubjectComponent } from "./select-grade-and-subject/select-grade-and-subject.component";
import { HomePaperComponent } from './home-paper/home-paper.component';
import { HomeComponent } from './home.component';
import { QuizComponent } from './quiz/quiz.component';


const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,

        children: [
            {
                path: '',
                //component: ExamRepoManagementComponent
                component: SelectBoardAndYearComponent,
            },
            {
                path: 'select-grade-and-subject',
                component: SelectGradeAndSubjectComponent,
            },
            {
                path: 'quiz',
                component: QuizComponent,
            },
            {
                path: 'paper',
                component: HomePaperComponent,
            },
            {
                path: 'show-repo',
                component: ExamRepoManagementComponent
            }




        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]


})

export class HomeRoutingModule { }
