import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './Models/user';
import { UserService } from './services/user';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App  implements OnInit{
  appTitle = 'User Management App';
  users:User[] = [];

  isLoading: boolean = true;
  errorMessage: string= '';

  //new user properties:
  newName:string = '';
  newEmail: string = '';
  newUserName: string = '';

  constructor(private userService: UserService){}
  
  ngOnInit(): void {
    this.isLoading= true;
    this.userService.getUsers().subscribe({next: (data)=>
      {
        this.users = data; 
        this.isLoading = false;
        console.log("Data: ", data);
       
      }
      ,error: (error)=> 
      {
        console.log('Error fetching users: ', error); 
        this.errorMessage= error; 
        this.isLoading= false;
      }})
  }

  addUser():void{
    const newUser = {
      name: this.newName,
      email: this.newEmail,
      username: this.newUserName
    };

    this.userService.addUser(newUser).subscribe({next: (createdUser)=>
      {
      this.users = [...this.users, createdUser];
      this.newName = '';
      this.newEmail='';
      this.newUserName='';

      console.log('Updated User List ',this.users);

      },
      error: (error)=>
        {
          console.log('unable to add user: ', error);
          this.errorMessage = error;
        }});
  }

  deleteUser(id:number): void{
    const confirmed = confirm('Are you sure you eant to delete user !!!');

    if (!confirmed) 
    {
      return;
    }

    this.userService.deleteUser(id).subscribe({next: ()=>
      {
        this.users = this.users.filter(u=>u.id !== id)
      }, error: (error)=>
        {
          console.log('error deleting user', error);
          this.errorMessage = error;
        }});
  }

}
