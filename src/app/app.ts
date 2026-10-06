import { Component, signal } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { EmployeeCard } from './employee-card/employee-card';

interface Employee{
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
}

@Component({
  imports: [RouterOutlet, FormsModule, UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe, EmployeeCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {
  protected readonly title = signal('Angular25Days');
  
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
}
