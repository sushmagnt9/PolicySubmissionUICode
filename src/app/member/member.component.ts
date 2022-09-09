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
    userId:0,
    policyId:0,
    policyStatus:'',
    policyType:'',
    premiumAmount:'',
    createdDate:new Date,
    userName:'',
    firstName:'',
    lastName:'',
    dob:new Date,
    address:'',
    state:'',
    email:''
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
