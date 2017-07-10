import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { GradeMenuComponent } from './grade-menu/grade-menu.component';
import { MaterialComponentModule } from './material-component/material-component.module';
import { SubjectMenuComponent } from './subject-menu/subject-menu.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialComponentModule,

    ],
    declarations: [
        GradeMenuComponent,
        SubjectMenuComponent,

    ],
    exports: [
        GradeMenuComponent,
        SubjectMenuComponent,
    ]

})
export class SharedModule { }
