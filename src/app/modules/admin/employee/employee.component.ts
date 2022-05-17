import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Employee} from '../components.model';



@Component({
    selector     : 'employee',
    templateUrl  : './employee.component.html',
    styleUrls  : ['./employee.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class EmployeeComponent implements OnInit {
    newEmployee: Employee;
    modifyHotelDrawer: boolean = true;
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

    ngOnInit(): any {
        this.newEmployee = {} as Employee;
    }

    addEmployee(): any {
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
    }
}

