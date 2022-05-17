import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Hotel} from '../components.model';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
    selector     : 'hotel',
    templateUrl  : './hotel.component.html',
    styleUrls  : ['./hotel.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class HotelComponent implements OnInit{
    newHotel: Hotel;
    modifyHotelDrawer: boolean = true;
    hotels: Array<Hotel> = [
        {
            id: 0,
            name: 'Hotel el Cielo',
            description: 'El primero del gran imperio',
            address: 'AV. Arequipa 7085, Cercado de Lima'
        },
        {
            id: 1,
            name: 'Hotel el Cielo 2',
            description: 'El segundo del gran imperio',
            address: 'AV. Arequipa 7085, Cercado de Lima'
        },
        {
            id: 2,
            name: 'Hotel el Cielo 3',
            description: 'El tercero del gran imperio',
            address: 'AV. Arequipa 7085, Cercado de Lima'
        }
    ];
    numberHotels: number = this.hotels.length - 1;

    constructor(private _snackBar: MatSnackBar) {}

    ngOnInit(): any {
        this.newHotel = {} as Hotel;
    }

    addHotel(): any {
        this.numberHotels++;
        console.log(this.newHotel);
        this.hotels.push({
            id: this.numberHotels,
            name: this.newHotel.name,
            description: this.newHotel.description,
            address: this.newHotel.address
        });
        this.newHotel = {} as Hotel;
        console.log(this.hotels);
    }

    deleteHotel(hotel: Hotel): any {
    this._snackBar.open('Hotel deleted', 'Okay',{
        duration: 3000,
        direction: 'rtl',

    });
    }

    deleteSnack(hotel: Hotel): any {

        const confirmDelete = window.confirm(`¿Are you sure to delete ${hotel.name}?`);


        if(confirmDelete) {
            this.deleteHotel(hotel);
        }
    }

}

