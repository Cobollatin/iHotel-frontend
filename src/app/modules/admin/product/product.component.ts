import {Component, ViewEncapsulation} from '@angular/core';

export interface Products {
    id: number;
    name: string;
    price: number;
    brand: string;
    description: string;
    stock: number;
}

@Component({
    selector: 'hotel',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ProductComponent {
    addProduct: string = '';
    addBrand: string = '';
    addPrice: number = null;
    addDescription: string = '';
    addStock: number = null;
    products: Array<Products> = [
        {
            id: 0,
            name: 'Condones',
            price: 10,
            brand: 'Durex',
            description: '3 Unidades, Los preservativos Durex Placer Prolongados, está elaborado con un lubricante especial que contiene benzocaína que ayuda al hombre a retardar el clímax y a prolongar el placer. Cuenta con forma anatómica. Largo 195 mm, Ancho nominal 56 mm, espesor 0.052 mm.',
            stock: 3,
        },
        {
            id: 1,
            name: 'Galleta ritz',
            price: 1,
            brand: 'Ritz',
            description: 'Galletas saladas tostadas',
            stock: 4
        },
        {
            id: 2,
            name: 'Coca Cola',
            price: 2.50,
            brand: 'Coca cola',
            description: 'Contiene 500 ml, Sin azúcar, No contiene calorías - Tamaño personal',
            stock: 5
        }
    ];
    numberProducts: number = this.products.length - 1;

    addServiceName(): any {
        this.numberProducts++;
        this.products.push({
            id: this.numberProducts,
            name: this.addProduct,
            price: this.addPrice,
            brand: this.addBrand,
            description: this.addDescription,
            stock:this.addStock
        });
        this.addProduct = '';
        this.addPrice = null;
        this.addBrand = '';
        this.addDescription = '';
        this.addStock=null;
        console.log(this.products);
    }
}

