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
  baseUrl2 = 'https://localhost:7221/Policy';
  baseUrl3 = 'https://localhost:7221/Policy/UpdatePolicy';

  constructor(private http: HttpClient) { }

  User(usersignup : MemberRegister):Observable<MemberRegister[]>{
    return this.http.post<MemberRegister[]>(this.baseUrl, usersignup);
  }

  SearchMember(searchCriteria: MemberRegister):Observable<any>{

    let queryParams = new HttpParams();
      queryParams = queryParams.append("UserId",searchCriteria.memberId);
      queryParams = queryParams.append("FirstName",searchCriteria.firstName);
       queryParams = queryParams.append("LastName",searchCriteria.lastName);
       queryParams = queryParams.append("policyStatus",searchCriteria.policyStatus);

      return this.http.get<any>(this.baseUrl1,{params:queryParams});
  }
  AddPolicy(policy : MemberRegister):Observable<MemberRegister[]>{
    return this.http.post<MemberRegister[]>(this.baseUrl2, policy);
  }
  
  updatePolicy(policy: MemberRegister):Observable<MemberRegister>{
    return this.http.put<MemberRegister>(this.baseUrl3 ,policy);
  }

}