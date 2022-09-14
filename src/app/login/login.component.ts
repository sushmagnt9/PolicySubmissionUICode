import { Component, OnInit } from '@angular/core';
import { User } from '../models/loginpage';
import { loginService } from '../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  val : string | null ="noValue";
  title = 'users';
  users:User[] = [];
  user : User = {
    id:'',
    UserName :'',
    Password :'',
    userRole :''
  }
  constructor(private loginService : loginService,private router : Router) { }

  ngOnInit(): void {
    this.val=localStorage.getItem("SomeVariable");
  }

  getData()
  {
    console.info(this.val);
  }
  response:any;
  ErrMsg=''
  EmpMsg=''
  onSubmit() {
    if(this.user.UserName!='' && this.user.Password!=''){

      this.loginService.validateUser(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.response = response;
          localStorage.setItem('response',this.response.response,)
          if(this.response.userRole=='Admin')
          {
           // alert('Login failed');
           this.router.navigate(['/adminSearch']);
            // this.ErrMsg='Login failed';
            // return;
          }
          else if(this.response.userRole=='Member')
          {
          //alert('Login Sucess');
          this.router.navigate(['/memberSearch']);
          }
          else
          {
            this.ErrMsg='Login failed';
             return;
          }
          
        }
      )
      }
      if(this.user.UserName=='' && this.user.Password=='')
      {
        this.EmpMsg = 'please provide UserName and password';
        return;
      }
}
}
