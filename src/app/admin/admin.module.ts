import {NgModule} from "@angular/core";
import {AdminRoutingModule} from "./admin-routing.module";
import {CommonModule} from "@angular/common";

import {AdminComponent} from "./admin.component";
import { AdminDashboardComponent } from './admin-dashboard.component';
import {NewQuestionComponent} from "./new-question/new-question.component";
import {GradeService} from "../services/grade.service";
import {SubjectService} from "../services/subject.service";
import {QuestionService} from "../question.service";
import {FormsModule} from "@angular/forms";
import { ManageQuestionsComponent } from './manage-questions.component';
import {SharedModule} from "../shared/shared.module";
import {QuestionsModule} from "../questions/questions.module";
import { QuizManagementComponent } from './quiz-management.component';
import {QuizModule} from "../quiz/quiz.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        //HttpModule,
        SharedModule,
        QuizModule,
        QuestionsModule,
        AdminRoutingModule,

    ],

    declarations: [
        AdminComponent,
        NewQuestionComponent,
        AdminDashboardComponent,
        ManageQuestionsComponent,
        QuizManagementComponent,

    ],

    exports: [

    ],


    providers: [
        GradeService,
        SubjectService,
        QuestionService
    ],

})
export class AdminModule { }