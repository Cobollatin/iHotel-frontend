import { Component, ViewEncapsulation } from '@angular/core';

export interface Services{
    id: number;
    name: string;
    price: number;
}

@Component({
    selector     : 'service',
    templateUrl  : './service.component.html',
    styleUrls  : ['./service.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ServiceComponent
{
    addService: string = '';
    addPrice: number = null;
    services: Array<Services> = [
        {
            id: 0,
            name: 'Cuarto una cama de una plaza',
            price: 10,
        },
        {
            id: 1,
            name: 'Cuarto una cama de dos plaza',
            price: 20,
        },
        {
            id: 2,
            name: 'Almuerzo y desayuno',
            price: 30,
        }
    ];
    numberService: number = this.services.length - 1;
    addServiceName(): any {
        this.numberService++;
        this.services.push({id: this.numberService,name: this.addService, price: this.addPrice});
        this.addService = '';
        this.addPrice = null;
        console.log(this.services);
    }
}




