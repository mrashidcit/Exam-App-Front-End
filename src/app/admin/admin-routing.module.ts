import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AdminDashboardComponent} from "./admin-dashboard.component";
import {NewQuestionComponent} from "./new-question/new-question.component";
import {ManageQuestionsComponent} from "./manage-questions.component";

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'new-question', component: NewQuestionComponent},
                    { path: 'manage-questions', component: ManageQuestionsComponent},
                    { path: '', component: AdminDashboardComponent}
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