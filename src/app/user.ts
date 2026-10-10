import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, retryWhen } from 'rxjs';
import { User } from './Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient);

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  //Fetch Users
  getUsers(): Observable<User[]>{

    return this.http.get<User[]>(this.apiUrl);
  }

  //Add User
  addUser(user: Omit <User, 'id'>): Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }

  //Update User
  updateUser(user:User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user)
  }

  //Delete User
  deleteUser(id:number): Observable<unknown>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
