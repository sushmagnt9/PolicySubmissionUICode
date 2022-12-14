import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister } from '../models/register';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class registerService{

  baseUrl = 'https://policysubmission20220916080641.azurewebsites.net/User';

  constructor(private http: HttpClient) { }

  User(usersignup : UserRegister):Observable<UserRegister[]>{
      return this.http.post<UserRegister[]>(this.baseUrl, usersignup);
  }

}
