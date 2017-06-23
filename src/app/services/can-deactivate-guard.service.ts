import {Injectable} from "@angular/core";
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {QuizParentComponent} from "../quiz/quiz-parent/quiz-parent.component";


@Injectable()
export class CanDeactivateGuard implements
        CanDeactivate<QuizParentComponent>{

    canDeactivate(
        component: QuizParentComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> | boolean{

            // Logic here

        return component.dialogService.confirm('Discard changes?');
    }

}
