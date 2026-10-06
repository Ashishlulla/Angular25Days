import { Component } from '@angular/core';
import { EmployeeService, EmployeeServiceInterface } from '../employee';

@Component({
  imports: [],
  selector: 'app-employee-list',
  styleUrl: './employee-list.css',
  templateUrl: './employee-list.html',
})


export class EmployeeList {

  employees: EmployeeServiceInterface[] = [];

  constructor(private employeeService: EmployeeService)
  {
    this.employees = this.employeeService.getEmployees();
  } 
}