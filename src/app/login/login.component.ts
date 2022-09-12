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
  onSubmit() {
    if(this.user.UserName!='' && this.user.Password!=''){

      this.loginService.validateUser(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.response = response;
          localStorage.setItem('response',this.response.response,)
          if(this.response.token=='')
          {
           // alert('Login failed');
            this.ErrMsg='Login failed';
            return;
          }
          else 
          {
          //alert('Login Sucess');
          this.router.navigate(['/memberSearch']);
          }
          
        }
      )
      }
}
}
