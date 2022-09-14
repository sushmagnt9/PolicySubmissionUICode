import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../models/register';
import { registerService } from '../service/register.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  val : string | null ="noValue";
  title = 'userRegister';
  users:UserRegister[] = [];
  user : UserRegister = {
    UserId:0,
    UserName:'',
    Password:'',
    UserRole:''
    
  }

  constructor(private registerService : registerService,private router : Router) { }

  ngOnInit(): void {
    this.val=localStorage.getItem("SomeVariable");
  }
  getData()
  {
    console.info(this.val);
  }
  response:any;
  EmpMsg='';
  onSubmit() {
    debugger;
    if(this.user.UserName=='' && this.user.UserRole=='' && this.user.Password=='')
    {
      this.EmpMsg = 'please provide all details to register';
        return;
    }
    if(this.user.UserName!='' && this.user.UserRole!='' && this.user.Password!='')
    {
      this.registerService.User(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.response = response;
          localStorage.setItem('response',this.response.response,)
          if(this.user.UserRole=='Member')
          {
            this.router.navigate(['/member']);
          }
        else if(this.user.UserRole=='Admin')
        {
          this.router.navigate(['/memberSearch']);
        }
          // if(this.response.UserRole=='Author')
          // {
          //   this.router.navigate(['/createbooks']);
          // }
          // else{
          //   this.router.navigate(['/Books'])
          // }
        }
      )
    } 
  }   
}