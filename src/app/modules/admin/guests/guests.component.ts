import { Component, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RegisterComponent} from "./dialogRegister/dialog.component";
@Component({
    selector     : 'guests',
    templateUrl  : './guests.component.html',
    encapsulation: ViewEncapsulation.None
})
export class GuestsComponent {
    /**
     * Constructor
     */
    constructor(private dialog: MatDialog) {
    }

    openDialogRegister(): void {
        this.dialog.open(RegisterComponent, {
            width: '35rem',

        });
    }
}
