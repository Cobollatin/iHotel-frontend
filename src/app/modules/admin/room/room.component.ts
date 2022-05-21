import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Employee, Hotel, Room} from '../components.model';



@Component({
    selector     : 'room',
    templateUrl  : './room.component.html',
    styleUrls  : ['./room.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class RoomComponent implements OnInit {
    newRoom: Room;
    modifyHotelDrawer: boolean = true;
    selectHotel: Hotel;
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
    roomType: Array<any> = [
        {
            id: 0,
            name: 'Matrimonial',
            beds: [
                {
                    bedId: 3,
                    amount: 1,
                }
            ]
        },
        {
            id: 1,
            name: 'Familiar',
            beds: [
                {
                    bedId: 1,
                    amount: 1,
                },
                {
                    bedId: 0,
                    amount: 2,
                }
            ]
        },
        {
            id: 2,
            name: 'MultiFamiliar',
            beds: [
                {
                    bedId: 1,
                    amount: 1,
                },
                {
                    bedId: 0,
                    amount: 4,
                }
            ]
        }
    ];
    rooms: Array<Room> = [
        {
            id: 0,
            hotelId: 0,
            roomTypeId: 0,
            roomNumber: 101,
            floor: 1,
        },
        {
            id: 1,
            hotelId: 1,
            roomTypeId: 2,
            roomNumber: 201,
            floor: 2,
        }
    ];
    bedType: Array<any> = [
        {
            id: 0,
            name: 'Individual'
        },
        {
            id: 1,
            name: 'Doble'
        },
        {
            id: 2,
            name: 'Queen Size'
        },
        {
            id: 3,
            name: 'King Size'
        }
    ];
    numberEmployee: number = this.rooms.length - 1;

    ngOnInit(): any {
        this.newRoom = {} as Room;
        this.selectHotel = {} as Hotel;
    }

    // addEmployee(): any {
    //     this.numberEmployee++;
    //     console.log(this.newEmployee);
    //     this.employee.push({
    //         id: this.numberEmployee,
    //         name: this.newEmployee.name,
    //         identificationCard: this.newEmployee.identificationCard,
    //         phoneNumber: this.newEmployee.phoneNumber,
    //         position: this.newEmployee.position
    //     });
    //     this.newEmployee = {} as Employee;
    //     console.log(this.employee);
    // }
}

