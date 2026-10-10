import { Component,  input, output } from '@angular/core';



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

   employeeSelected = output<number>();
   employeeNameSelected = output<string>();

   selectEmployee(): void
   {
      const id = this.employee()?.id;

     if(id !== undefined)
    {
        this.employeeSelected.emit(id);
    }
   }

   ShowEmployeeNameInConsole(): void
   {
      const name = this.employee()?.name;
      
      if(name !== undefined)
      {
          this.employeeNameSelected.emit(name);
      }
   }
}
