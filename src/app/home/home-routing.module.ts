import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { SelectBoardAndYearComponent } from "./select-board-and-year/select-board-and-year.component";

const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        
        children: [
            {
                path: '',
                component: SelectBoardAndYearComponent,
            }
            
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]


})

export class HomeRoutingModule { }