import { Component, OnInit } from '@angular/core';
import { MemberRegister } from '../models/memberpage';
import { memberService } from '../service/member.service';

@Component({
  selector: 'app-updatepolicy',
  templateUrl: './updatepolicy.component.html',
  styleUrls: ['./updatepolicy.component.css']
})
export class UpdatepolicyComponent implements OnInit {
  title = "Update Policy";
  users: any = {};
  user : MemberRegister = {
    
    policyId:0,
    policyStatus: localStorage.getItem("policyStatus")?.toString(),
    policyType: localStorage.getItem("policyType")?.toString(),
    premiumAmount: localStorage.getItem("premiumAmount")?.toString(),
    policyEffectiveDate: localStorage.getItem("policyEffectiveDate")?.toString(),
    userName:'',
    firstName:'',
    lastName:'',
    dob:new Date,
    address:'',
    state:'',
    email:'',
    memberId: localStorage.getItem("example")?.toString(),
  }
  constructor(private memberService: memberService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.memberService.updatePolicy(this.user)
    .subscribe(
      response => {
        // this.users=Object.values(response);
        this.users = response;
         console.log(this.users);
      }
    );
}

}

