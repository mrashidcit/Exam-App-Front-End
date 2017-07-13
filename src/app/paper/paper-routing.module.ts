import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaperComponent } from './paper.component';
import { ShowPaperComponent } from './show-paper/show-paper.component';

const paperRoutes: Routes = [
    {
        path: 'paper',
        component: PaperComponent,

        children: [
            {
                path: '',
                component: ShowPaperComponent
            }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(paperRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PaperRoutingModule { }