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
    memberId:0,
    policyId:0,
    policyStatus:'',
    policyType:'',
    premiumAmount:'',
    policyEffectiveDate:new Date,
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
    if(this.user.address!='' && this.user.firstName!='' && this.user.lastName!='' && this.user.state!=''
    && this.user.email!='' && this.user.userName!='')
    {
      debugger;
      this.memberService.User(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.response = response;
          this.router.navigate(['/memberSearch']);
          return;
        }
      )
      } 
      else 
      {
        this.ErrMsg= "Please fill all the details"
        return ;
      }    
    }
}
