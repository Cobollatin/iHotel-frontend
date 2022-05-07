import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

interface Room {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'dialog-register',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit{


    categoryRoom: string;
    availableRoom: string;
    registerForm !:FormGroup

    rooms: Room[] = [
        {value: '3', viewValue: 'Sangamor room'},
        {value: '2', viewValue: 'Nayolas room'},
        {value: '1', viewValue: 'Flowers room'},
    ];
    categories: Room[] = [
        {value: '4', viewValue: 'Familiar'},
        {value: '2', viewValue: 'Double'},
        {value: '1', viewValue: 'Individual'},
        {value: '2', viewValue: 'Suite'},
        {value: '2', viewValue: 'Junior Suite'},
    ]
    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.registerForm= this.formBuilder.group(
            {
                email:['', [Validators.required, Validators.email]],
                name: ['', [Validators.required, Validators.minLength(3)]],
                idCard: ['', [Validators.required, Validators.minLength(3)]],
                phone :['', [Validators.required, Validators.min(3)]]
            }
        )
    }

    getErrorMessage(input: FormControl) {
        if (input.hasError('required')) {
            return 'You must enter a value';
        }
        return input.hasError('input') ? 'Not a valid input' : '';
    }
    registerGuest():void{
        console.log(this.registerForm.value)
    }


}
