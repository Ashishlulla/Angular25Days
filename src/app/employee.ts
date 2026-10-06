import { Injectable } from '@angular/core';

export interface EmployeeServiceInterface{
  id: number;
  name: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})






export class EmployeeService {

  private employees :EmployeeServiceInterface[] =
  [
    {
      id: 101,
      name: 'Ashish',
      role: 'Full Stack .NET Developer'
    },
    {
      id: 102,
      name: 'Rahul',
      role: 'Angular Developer'
    }
  ];

  getEmployees(): EmployeeServiceInterface[]{
    return this.employees;
  }

  addEmployee(employee:EmployeeServiceInterface):void
  {
    this.employees.push(employee);
  }

  getEmployeeById(id:number):EmployeeServiceInterface | undefined
  {
    return this.employees.find(employee => employee.id == id);
  }

  deleteEmployeeById(id:number): EmployeeServiceInterface[]
  {
    return this.employees = this.employees.filter(employee => employee.id !== id);
  }
}
