import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Employee, Room} from '../components.model';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
    selector     : 'employee',
    templateUrl  : './employee.component.html',
    styleUrls  : ['./employee.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class EmployeeComponent implements OnInit {
    newEmployee: Employee;
    updateEmployeeDrawer: boolean = false;
    employee: Array<Employee> = [
        {
            id: 1,
            name: 'Marco Mendoza',
            identificationCard: '85687535',
            phoneNumber: '969874563',
            position: 'Cleaning Staff',
        },
        {
            id: 2,
            name: 'Manuel Balta',
            identificationCard: '85769335',
            phoneNumber: '94485634',
            position: 'Manager',
        },
        {
            id: 3,
            name: 'Nino Garcia',
            identificationCard: '65348452',
            phoneNumber: '93356427',
            position: 'Housekeeper',
        }
    ];
    numberEmployee: number = this.employee.length - 1;
    selectEmployee: Employee;

    constructor(private _snackBar: MatSnackBar) {}
    ngOnInit(): any {
        this.newEmployee = {} as Employee;
    }

    addEmployee(): any {
        if((this.newEmployee.phoneNumber !== undefined && this.newEmployee.phoneNumber !== '')  && (this.newEmployee.name !== undefined && this.newEmployee.name !== '')
            && (this.newEmployee.identificationCard !== undefined && this.newEmployee.identificationCard !== '') &&
            (this.newEmployee.position !== undefined && this.newEmployee.position !== '')){
            this.numberEmployee++;
            console.log(this.newEmployee);
            this.employee.push({
                id: this.numberEmployee,
                name: this.newEmployee.name,
                identificationCard: this.newEmployee.identificationCard,
                phoneNumber: this.newEmployee.phoneNumber,
                position: this.newEmployee.position
            });
            this.newEmployee = {} as Employee;
            console.log(this.employee);
        }else {
            this._snackBar.open('Data Invalid', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }

    }

    updateEmployee(): any{
        if((this.newEmployee.phoneNumber !== undefined && this.newEmployee.phoneNumber !== '')  && (this.newEmployee.name !== undefined && this.newEmployee.name !== '')
            && (this.newEmployee.identificationCard !== undefined && this.newEmployee.identificationCard !== '') &&
            (this.newEmployee.position !== undefined && this.newEmployee.position !== '')){
            this.employee = this.employee.map((value: Employee) =>{
                if(value.id === this.newEmployee.id){
                    value= this.newEmployee;
                }
                return value;
            });

            this._snackBar.open('Employee updated', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });

            this.updateEmployeeDrawer = false;
            this.newEmployee = {} as Employee;
        }
        else{
            this.employee = this.employee.map((value: Employee) =>{
                if(value.id === this.newEmployee.id){
                    value.name = this.selectEmployee.name;
                    value.identificationCard = this.selectEmployee.identificationCard;
                    value.phoneNumber = this.selectEmployee.phoneNumber;
                    value.position = this.selectEmployee.position;
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

    cancelUpdateEmployee(): any{
        this.updateEmployeeDrawer = false;

        this.employee = this.employee.map((value: Employee) =>{
            if(value.id === this.newEmployee.id){
                value.name = this.selectEmployee.name;
                value.identificationCard = this.selectEmployee.identificationCard;
                value.phoneNumber = this.selectEmployee.phoneNumber;
                value.position = this.selectEmployee.position;
            }
            return value;
        });

        this.newEmployee = {} as Employee;
    }

    updateSelectionEmployee(employee: Employee): any {
        this.updateEmployeeDrawer = true;
        this.newEmployee = employee;

        this.selectEmployee = {
            id: null,
            name: this.newEmployee.name,
            identificationCard: this.newEmployee.identificationCard,
            phoneNumber: this.newEmployee.phoneNumber,
            position: this.newEmployee.position
        };
    }

    deleteEmployeeConfirmation(employee: Employee): any {
        const confirmDelete = window.confirm(`¿Are you sure to delete ${employee.name}?`);

        if(confirmDelete) {
            this.employee =  this.employee.filter((value)=>{
                if(value.id !== employee.id) {return value;}
            });
            this._snackBar.open('Employee deleted', 'Okay',{
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        }
    }
}

