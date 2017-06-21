import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AdminDashboardComponent} from "./admin-dashboard.component";
import {NewQuestionComponent} from "./new-question/new-question.component";
import {ManageQuestionsComponent} from "./manage-questions.component";
import {QuizManagementComponent} from "./quiz-management.component";
import {AuthGuard} from "../services/auth-guard.service";

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    { path: 'new-question', component: NewQuestionComponent},
                    { path: 'manage-questions', component: ManageQuestionsComponent},
                    { path: '', component: AdminDashboardComponent},
                    { path: 'quiz-management', component: QuizManagementComponent}
                ]
            }

        ]

    }
];


@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule],

})

export class AdminRoutingModule { }