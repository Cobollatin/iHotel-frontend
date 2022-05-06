import { Component, ViewEncapsulation } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface Customers{
    id: number;
    name: string;
}
export interface Consumptions{
    id: number;
    customer: number;
    service: Array<number>;
}
export interface Services{
    id: number;
    name: string;
}

@Component({
    selector     : 'service',
    templateUrl  : './service.component.html',
    styleUrls  : ['./service.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ServiceComponent
{
    addCustomer: string = '';
    customerName: string;
    customers: Array<Customers> = [
        {
            id: 0,
            name: 'Pedro Perez',
        },
        {
            id: 1,
            name: 'Marco Rojas',
        },
        {
            id: 2,
            name: 'Thiago Ramos',
        }
    ];
    consumptions: Array<Consumptions> = [
        {
            id:0,
            customer: 0,
            service: [1,0],
        },
        {
            id:1,
            customer: 1,
            service: [2,0],
        },
        {
            id:2,
            customer: 2,
            service: [0,2],
        }
    ];
    services: Array<Services> = [
        {
            id: 0,
            name: 'Cuarto una cama de una plaza'
        },
        {
            id: 1,
            name: 'Cuarto una cama de dos plaza'
        },
        {
            id: 2,
            name: 'Almuerzo y desayuno'
        }
    ];
    numberCustomers: number = this.customers.length - 1;
    numberConsumption: number = this.consumptions.length - 1;
    addCustomerName(): any {
        console.log(this.addCustomer);
        this.numberConsumption++;
        this.numberCustomers ++;
        this.customers.push({id: this.numberCustomers,name: this.addCustomer});
        this.consumptions.push({
            id: this.numberConsumption,
            customer: this.numberCustomers,
            service: null,
        });
        this.addCustomer = '';
        console.log(this.customers);
    }
}




