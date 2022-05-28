import {Component, OnInit, Input, ViewEncapsulation, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, DialogRole} from '@angular/material/dialog';

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

    registerForm !: FormGroup;
    actionButton: string = 'Save';
    rooms: Room[] = [
        {value: '4', viewValue: '4'},
        {value: '3', viewValue: '3'},
        {value: '2', viewValue: '2'},
        {value: '1', viewValue: '1'},
    ];
    beds: Room[] = [
        {value: '4', viewValue: '4'},
        {value: '2', viewValue: '2'},
        {value: '1', viewValue: '1'},
        {value: '2', viewValue: '2'},
        {value: '2', viewValue: '2'},
    ];
    bathrooms: Room[] = [
        {value: '1', viewValue: '1'},
        {value: '2', viewValue: '2'},
        {value: '3', viewValue: '3'},
        {value: '4', viewValue: '4'},
    ];
    categories: Room[] = [
        {value: 'Premium', viewValue: 'Premium'},
        {value: 'VIP', viewValue: 'VIP'},
        {value: 'Golden', viewValue: 'Golden'},
    ];
    constructor(private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<RegisterComponent>) {
    }

    ngOnInit(): void {
        this.registerForm= this.formBuilder.group(
            {
                name: ['', [Validators.required, Validators.minLength(3)]],
                idCard: ['', [Validators.required, Validators.minLength(3)]],
                phone :['', [Validators.required, Validators.min(3)]],
                email:['', [Validators.required, Validators.email]],
                reservationStart: ['', [Validators.required]],
                reservationEnd: ['', [Validators.required]],
                roomCategory :['', [Validators.required]],
                numberOfBeds:['', [Validators.required ]],
                numberOfBathrooms :['', [Validators.required ]],
                numberOfRooms :['', [Validators.required ]],
            }
        );
       if(this.editData){
        this.actionButton = 'Update';
        this.registerForm.controls['name'].setValue(this.editData.name);
        this.registerForm.controls['idCard'].setValue(this.editData.idCard);
        this.registerForm.controls['phone'].setValue(this.editData.phone);
        this.registerForm.controls['email'].setValue(this.editData.email);
        this.registerForm.controls['reservationStart'].setValue(this.editData.reservationStart);
        this.registerForm.controls['reservationEnd'].setValue(this.editData.reservationEnd);
        this.registerForm.controls['roomCategory'].setValue(this.editData.roomCategory);
        this.registerForm.controls['numberOfBeds'].setValue(this.editData.numberOfBeds);
        this.registerForm.controls['numberOfBathrooms'].setValue(this.editData.numberOfBathrooms);
        this.registerForm.controls['numberOfRooms'].setValue(this.editData.numberOfRooms);
       };
    }

    registerGuest(): void{
        if(this.registerForm.valid){
            //Post to server and close dialog
          console.log(this.registerForm.value);
          alert('Guest registered successfully');
          this.registerForm.reset();
          this.dialogRef.close('save');
        }
    }


}
