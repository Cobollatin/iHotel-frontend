import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {ServiceComponent} from './service.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ServiceComponent
    }
];

@NgModule({
    declarations: [
        ServiceComponent
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatGridListModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatIconModule,
        CommonModule,
        FormsModule
    ]
})
export class ServiceModule
{
}
