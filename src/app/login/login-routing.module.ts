import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {AuthService} from "../services/auth.service";
import {AuthGuard} from "../services/auth-guard.service";

const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard,
        AuthService
    ]

})

export class LoginRoutingModule { }