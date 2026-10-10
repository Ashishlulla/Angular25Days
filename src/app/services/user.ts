import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: Omit<User, 'id'>): Observable<User>{
    return this.http.post<User>(this.apiUrl,user);
  }

  deleteUser(id:number): Observable<unknown>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

}
