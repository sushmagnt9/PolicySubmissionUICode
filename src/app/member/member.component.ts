import { Component, OnInit } from '@angular/core';
import { MemberRegister } from '../models/memberpage';
import { memberService } from '../service/member.service';

import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  val : string | null ="noValue";
  title = 'memberRegister';
  users:MemberRegister[] = [];
  user : MemberRegister = {
    UserId:0,
    UserName:'',
    DOB:'',
    Address:'',
    State:'',
    Email:''
  }

  constructor(private memberService : memberService , private router : Router) { }

  ngOnInit(): void {
  }
  response:any;
  ErrMsg=''
  onSubmit() {
      debugger;
      this.memberService.User(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.response = response;
          alert('registration sucess');
          this.ErrMsg = 'registration sucess';
          return;
        }
      )
      }     
}
