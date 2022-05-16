import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Hotel} from '../components.model';



@Component({
    selector     : 'hotel',
    templateUrl  : './hotel.component.html',
    styleUrls  : ['./hotel.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class HotelComponent implements OnInit{
    newHotel: Hotel;
    selectedHotel: string = '';
    hotelId: number;
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

    ngOnInit() {
        this.newHotel = {} as Hotel;
    }

    addHotel(): any {
        this.numberHotels++;
        this.hotels.push({id: this.numberHotels,name: this.newHotel.name, description: this.newHotel.description, address: this.newHotel.address});
        this.newHotel = null;
        console.log(this.hotels);
    }

    cancelCustomerService(): any{

    }
}

