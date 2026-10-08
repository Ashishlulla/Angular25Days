import { Component, signal } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { EmployeeCard } from './employee-card/employee-card';
import { EmployeeService, EmployeeServiceInterface } from './employee';
import { Department,  } from './department';
import { DepartmentInterface } from './department';
import {EmployeeList} from './employee-list/employee-list';
import { EmployeeApi } from './employee-api';
import { ApiUser } from './Models/api-user';


interface Employee{
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
}

interface EmployeeCardInput{
  id: number;
  name: string;
  role: string;
}

@Component({
  imports: [RouterOutlet, RouterLink, FormsModule, UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe, EmployeeCard, EmployeeList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {


  protected readonly title = signal('Angular25Days');
  
  //Day5- Services and Dependency Injection
  employeesFromService: EmployeeServiceInterface[] = [];
  departmentsFromService: DepartmentInterface[] = [];
  
  constructor(private employeeService: EmployeeService, private departmentService: Department, private employeApi:EmployeeApi) 
  {
    this.departmentsFromService = this.departmentService.getDepartments();
  }


  counter = signal(0);
  showDetails = signal(true);

  // Day 2 - Data Binding
  day2Title:string = "Angular Data Binding";
  imageUrl: string = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif'; 
  message: string = 'Click the button';
  userName: string = '';

  //Day2-Practice
  practiceUserName: string = 'Ashish';
  practiceUserRole: string = 'Full Stack .NET Developer';
  displayName: string = '';
  greeting: string = 'Welcome!';
  
  showEmployee = true

  //Day3 
  isLoggedIn: boolean = true;

  employees:Employee[]=[
    {
      id: 1,
      name:'Ashish lulla',
      email:'ashish@example.com',
      department:'IT',
      salary: 500000
    }, {
      id: 2,
      name:'John Doe',
      email:'john@example.com',
      department:'HR',
      salary: 550000       
    }, 
    {
      id: 3,
      name:'Jane Smith',
      email:'jane@example.com',
      department:'Finance',
      salary: 450000
    }
  ];

  courseName: string = 'Angular 25 Days Challenge';
  joingDate: Date = new Date();

  isLearningAngular: boolean = true;
  employee: Employee = {
    id: 1,
    name:'Ashish lulla',
    email:'ashishlulla@example.com',
    department:'IT',
    salary: 500000
  }

  // Day 4 - Component Interaction
  selectedEmployee: EmployeeCardInput = {
    id: 1,
    name:'Ashish lulla',
    role: 'Software Engineer'
  };

  selectedEmployeeId: number | null = null;

  selectedEmployeeName: string | null = null;

  id: number = 0;

  //Day8-Http
  apiUsers: ApiUser[]=[];
  loadedUsers: boolean = false;
  isLoading: boolean = false;
  apiError: boolean = false;

   
  showMessage(): void{
    alert("Hello welcome to Angular 25 Days Challenge");
  }

  changeName(): void{
    this.employee.name = "Angular Developer";
  }

  toggleLearningStatus(): void{
    this.isLearningAngular = !this.isLearningAngular;
  }

  updateGreeting(): void{
    this.greeting = `Hello ${this.displayName}`;
  }

  onEmployeeSelected(employeeId: number): void{
    this.selectedEmployeeId = employeeId;

    console.log(`Selected Employee ID: ${employeeId}`);
  }

  onEmployeeNameSelected(employeeName: string): void
  {
    this.selectedEmployeeName = employeeName;

    console.log(`Selected Employee Name: ${employeeName}`);
  }

  //Day5- Services and Dependency Injection
  getEmployesFromService(): void {

    this.employeesFromService = this.employeeService.getEmployees();

    console.log(`Employees: ${JSON.stringify(this.employeesFromService)}`);
  }

  addEmployee():void
  {
    this.employeeService.addEmployee({id: 103, name: 'New Employee', role: 'Intern'})

    console.log('Employee added successfully');
  }

  getDepartments():void
  {
      this.departmentsFromService =this.departmentService.getDepartments();

      console.log(`Departments: ${this.departmentsFromService}`);
  }

  getEmployeeById(id:number):void
  {
    const employee = this.employeeService.getEmployeeById(id);
    console.log(`Employee: ${employee?.id}, ${employee?.name}, ${employee?.role}`);
  }

  deleteEmployeeById(id:number):void
  {
    const updatedEmployees = this.employeeService.deleteEmployeeById(id);
    console.log(`Updated Employees: ${JSON.stringify(updatedEmployees)}`);
  }

  getUsersFromApi(): void{
    this.employeApi.getUsers().subscribe({
  next: (data) => {
    console.log('API DATA:', data);
    this.apiUsers = data;
    this.loadedUsers = true;
    this.isLoading = true;
  },
  error: (error) => {
    console.error('API ERROR:', error);

    this.apiError = true
    this.isLoading=false;
  }
    });
}

}
