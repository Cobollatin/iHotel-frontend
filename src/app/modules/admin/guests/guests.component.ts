import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterComponent } from './dialog/dialog.component';

export interface Guests {
    id: number;
    name: string;
    idCard: string;
    phone: string;
    email: string;
    reservationStart: string;
    reservationEnd: string;
    roomCategory: string;
    numberOfBeds: string;
    numberOfBathrooms: string;
    numberOfRooms: string;
}
@Component({
    selector: 'guests',
    templateUrl: './guests.component.html',
    styleUrls: ['./guests.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class GuestsComponent implements OnInit {

    /**
     * Constructor
     */
     guests: Array<Guests> = [
        {
            id: 0,
            name: 'Pepe Sanchez',
            idCard: '23232',
            phone: '232323',
            email: 'ebra@gmail.com',
            reservationStart: '2022-05-12T05:00:00.000Z',
            reservationEnd: '2022-05-19T05:00:00.000Z',
            roomCategory: 'Premium',
            numberOfBeds: '2',
            numberOfBathrooms: '1',
            numberOfRooms: '4',
        },
        {
            id: 0,
            name: 'Pepe Sanchez',
            idCard: '23232',
            phone: '232323',
            email: 'ebra@gmail.com',
            reservationStart: '2022-05-1T05:00:00.000Z',
            reservationEnd: '2022-05-12T05:00:00.000Z',
            roomCategory: 'Premium',
            numberOfBeds: '2',
            numberOfBathrooms: '1',
            numberOfRooms: '4',
        },
        {
            id: 0,
            name: 'Pepe Sanchez',
            idCard: '23232',
            phone: '232323',
            email: 'ebra@gmail.com',
            reservationStart: '2022-04-12T05:00:00.000Z',
            reservationEnd: '2022-04-15T05:00:00.000Z',
            roomCategory: 'Premium',
            numberOfBeds: '2',
            numberOfBathrooms: '1',
            numberOfRooms: '4',
        }
    ];
    constructor(private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAllGuests();
    }

    openDialogRegister(): void {
        this.dialog.open(RegisterComponent, {
            width: '35rem',

        });
    }
    openDialogUpdate(id: any): void{
        //Obtener la data mediante el id antes de pasar al al Dialog component
        console.log(this.guests[(id)]);
        this.dialog.open(RegisterComponent, {
            width: '35rem',
            data: this.guests[(id)],
        });
    }
    getAllGuests(): void {
        // this.guests = this.guestsService.getAllGuests();
    }
}
