import {NgModule} from "@angular/core";
import {AdminRoutingModule} from "./admin-routing.module";
import {CommonModule} from "@angular/common";

import {AdminComponent} from "./admin.component";
import { AdminDashboardComponent } from './admin-dashboard.component';
import {NewQuestionComponent} from "./new-question/new-question.component";
import {GradeService} from "../services/grade.service";
import {SubjectService} from "../services/subject.service";
import {QuestionService} from "../question.service";
import {GradeMenuComponent} from "./menu/grade-menu/grade-menu.component";
import {SubjectMenuComponent} from "./menu/subject-menu/subject-menu.component";
import {FormsModule} from "@angular/forms";
import { ManageQuestionsComponent } from './manage-questions.component';
import {QuestionsModule} from "../questions/questions.module";


@NgModule({
    declarations: [
        AdminComponent,
        NewQuestionComponent,
        GradeMenuComponent,
        SubjectMenuComponent,
        AdminDashboardComponent,
        ManageQuestionsComponent,

    ],
    imports: [
        CommonModule,
        FormsModule,
        //HttpModule,

        AdminRoutingModule,
        QuestionsModule,

    ],
    exports: [
        GradeMenuComponent,
        SubjectMenuComponent
    ],


    providers: [
        GradeService,
        SubjectService,
        QuestionService
    ],

})
export class AdminModule { }