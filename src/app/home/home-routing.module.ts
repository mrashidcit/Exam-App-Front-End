import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SelectBoardAndYearComponent } from "./select-board-and-year/select-board-and-year.component";
import { SelectGradeAndSubjectComponent } from "./select-grade-and-subject/select-grade-and-subject.component";
import { QuizComponent } from "./quiz/quiz.component";
import { HomeComponent } from "./home.component";


const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        
        children: [
            {
                path: '',
                component: SelectBoardAndYearComponent,
            },
            {
                path: 'select-grade-and-subject',
                component: SelectGradeAndSubjectComponent,
            },
            {   
                path: 'quiz',
                component: QuizComponent,
            }
            
            
            
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]


})

export class HomeRoutingModule { }