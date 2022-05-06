import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { GuestsComponent } from 'app/modules/admin/guests/guests.component';
import {SearchModule} from "../../../layout/common/search/search.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RegisterComponent} from "./dialogRegister/dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
const exampleRoutes: Route[] = [
    {
        path     : '',
        component: GuestsComponent
    }
];

@NgModule({
    declarations: [
        GuestsComponent,
        RegisterComponent,

    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        SearchModule,
        MatDialogModule,
        MatMenuModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        CommonModule,
        MatInputModule,
        MatSelectModule,
        FormsModule
    ]
})
export class GuestsModule
{
}
