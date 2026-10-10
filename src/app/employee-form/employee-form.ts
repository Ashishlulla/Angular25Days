import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-employee-form',
  styleUrl: './employee-form.css',
  templateUrl: './employee-form.html',
})
export class EmployeeForm {

  name:string = '';
  email:string='';
  department:string = '';
  submitted: boolean=false;

  AddEmployee(form:NgForm): void{

    if (form.invalid) {
      return;
    }
    
    console.log(`Employee Name: ${this.name}`);
    console.log(`Employee Email: ${this.email}`);
    console.log(`Employee Department: ${this.department}`);

    this.submitted=true;
  }

}
