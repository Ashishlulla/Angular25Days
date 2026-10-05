import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Employee{
  id: number;
  name: string;
  email: string;
  department: string;
}

@Component({
  imports: [RouterOutlet, FormsModule],
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

  isLearningAngular: boolean = true;
  employee: Employee = {
    id: 1,
    name:'Ashish lulla',
    email:'ashishlulla@example.com',
    department:'IT'
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
