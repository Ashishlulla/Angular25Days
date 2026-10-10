import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUser } from './Models/api-user';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApi {

  constructor(private http:HttpClient){}

  getUsers()
  {
    return this.http.get<ApiUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
