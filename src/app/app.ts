import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Employee{
  id: number;
  name: string;
  email: string;
  department: string;
}

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {
  protected readonly title = signal('Angular25Days');
  
  counter = signal(0);
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
}
