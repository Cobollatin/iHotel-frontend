import { Component, ViewEncapsulation } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Room} from "../components.model";

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
    updateServiceId: number = null;
    updateServiceDrawer: boolean = false;
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
    selectService: Services;

    constructor(private _snackBar: MatSnackBar) {}

    addServiceName(): any {
        if(this.addPrice !== null && this.addService !== '')
        {
            this.numberService++;
            this.services.push({id: this.numberService,name: this.addService, price: this.addPrice});
            this.addService = '';
            this.addPrice = null;
            console.log(this.services);
        } else {
            this._snackBar.open('Data Invalid', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }

    updateSelectionService(service: Services): any {
        this.updateServiceDrawer = true;
        this.addService = service.name;
        this.addPrice = service.price;
        this.updateServiceId = service.id;
        this.selectService = {
            id: null,
            name: this.addService,
            price: this.addPrice,
        };
    }
    deleteService(service: Services): any {
        const confirmDelete = window.confirm(`¿Are you sure to delete ${service.name}?`);

        if(confirmDelete) {
            this.services =  this.services.filter((value)=>{
                if(value.id !== service.id) {return value;}
            });
            this._snackBar.open('Service deleted', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }

    updateService(): any{
        if(this.addPrice !== null && this.addService !== ''){
            this.services = this.services.map((value: Services) =>{
                if(value.id === this.updateServiceId){
                    value.name = this.addService;
                    value.price = this.addPrice;
                }
                return value;
            });

            this._snackBar.open('Service updated', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });

            this.updateServiceDrawer = false;
            this.addService = '';
            this.addPrice = null;
            this.addPrice = null;
        }
        else{
            this.services = this.services.map((value: Services) =>{
                if(value.id === this.updateServiceId){
                    value.name = this.selectService.name;
                    value.price = this.selectService.price;
                }
                return value;
            });

            this._snackBar.open('Data Invalid', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }

    cancelUpdateService(): any{
        this.updateServiceDrawer = false;
        this.services = this.services.map((value: Services) =>{
            if(value.id === this.updateServiceId){
                value.name = this.selectService.name;
                value.price = this.selectService.price;
            }
            return value;
        });
        this.addService = '';
        this.addPrice = null;
        this.addPrice = null;
    }

}




