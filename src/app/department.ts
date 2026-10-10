import { Injectable } from '@angular/core';

export interface DepartmentInterface 
{
  id:number;
  name:string;
}

@Injectable({
  providedIn: 'root',
})
export class Department 
{
  departments: DepartmentInterface[] = [
    {
      id: 1,
      name: 'IT'
    },
    {
      id: 2,
      name: 'HR'
    },
    {
      id: 3,
      name: 'Finance'
    }
  ];

  getDepartments(): DepartmentInterface[]
  {
    return this.departments;
  }
}
