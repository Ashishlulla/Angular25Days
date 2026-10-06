import { Component,  input } from '@angular/core';



@Component({
  imports: [],
  selector: 'app-employee-card',
  styleUrl: './employee-card.css',
  templateUrl: './employee-card.html',
})


export class EmployeeCard 
{
   employee = input<{
    id: number;
    name:string;
    role:string;
   }>();
}
