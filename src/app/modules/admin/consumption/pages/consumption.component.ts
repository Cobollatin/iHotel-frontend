import { Component, ViewEncapsulation } from '@angular/core';
import {Consumptions, Customers} from '../../components.model';
import {Services} from '../../service/pages/service.component';



@Component({
    selector     : 'consumption',
    templateUrl  : './consumption.component.html',
    styleUrls  : ['./consumption.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ConsumptionComponent
{
    customerName: string = '';
    addCustomer: string = '';
    selectedService: string = '';
    consumptionId: number;
    addServiceDrawer: boolean = false;
    addCustomerDrawer: boolean = true;
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
            name: 'Cuarto una cama de una plaza',
            price: 15
        },
        {
            id: 1,
            name: 'Cuarto una cama de dos plaza',
            price: 15
        },
        {
            id: 2,
            name: 'Almuerzo y desayuno',
            price: 15
        }
    ];
    numberCustomers: number = this.customers.length - 1;
    numberConsumption: number = this.consumptions.length - 1;
    addCustomerName(): any {
        this.numberConsumption++;
        this.numberCustomers ++;
        this.customers.push({id: this.numberCustomers,name: this.addCustomer});
        this.consumptions.push({
            id: this.numberConsumption,
            customer: this.numberCustomers,
            service: [],
        });
        this.addCustomer = '';
        console.log(this.consumptions);
    }
    addService(consumption: Consumptions): any{
        this.addServiceDrawer = true;
        this.addCustomerDrawer = false;
        this.customerName = this.customers[consumption.customer].name;
        this.consumptionId = consumption.id;
        console.log(consumption);
        console.log(this.consumptionId);
    }
    addCustomerService(): any{
        this.services.forEach((service)=>{
            if(service.name === this.selectedService)
            {
                this.consumptions.forEach((consumption)=>{
                    if(consumption.id === this.consumptionId)
                    {
                        consumption.service.push(service.id);
                        this.selectedService = '';
                    }
                });
            }
        });
    }
    cancelCustomerService(): any{
        this.addCustomerDrawer = true;
        this.addServiceDrawer = false;
        this.consumptionId = null;
        this.selectedService = '';
    }
}

