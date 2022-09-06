import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { User } from '../models/loginpage';

@Injectable({
  providedIn: 'root'
})
export class loginService{

  baseUrl = 'https://localhost:7274/validate';

  constructor(private http: HttpClient) { }

  validateUser(user : User){
      return this.http.post<User>(this.baseUrl, user);
  }

}