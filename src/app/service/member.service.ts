import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { User } from '../models/loginpage';
import { MemberRegister } from '../models/memberpage';

@Injectable({
  providedIn: 'root'
})
export class memberService{

  baseUrl = 'https://localhost:7221/Registration';
  baseUrl1 = 'https://localhost:7221/Registration/GetMemberById';

  constructor(private http: HttpClient) { }

  User(usersignup : MemberRegister):Observable<MemberRegister[]>{
    return this.http.post<MemberRegister[]>(this.baseUrl, usersignup);
  }

  SearchMember(searchCriteria: MemberRegister):Observable<Array<MemberRegister>>{

    let queryParams = new HttpParams();
      queryParams = queryParams.append("UserId",searchCriteria.userId);
      queryParams = queryParams.append("FirstName",searchCriteria.firstName);
       queryParams = queryParams.append("LastName",searchCriteria.lastName);
      // queryParams = queryParams.append("Address",searchCriteria.Address);
      // queryParams = queryParams.append("State",searchCriteria.State);
      // queryParams = queryParams.append("Email",searchCriteria.Email);

      return this.http.get<Array<MemberRegister>>(this.baseUrl1,{params:queryParams});
  }

}