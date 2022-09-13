import { Component, OnInit } from '@angular/core';
import { MemberRegister } from '../models/memberpage';
import { memberService } from '../service/member.service';

@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.css']
})
export class AddpolicyComponent implements OnInit {
  title = "Add Policy";
  users: any = {};
  user : MemberRegister = {
    
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
    email:'',
    memberId: 0
  }
  constructor(private memberService: memberService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.memberService.AddPolicy(this.user)
    .subscribe(
      response => {
        // this.users=Object.values(response);
        this.users = response;
         console.log(this.users);
      }
    );
}

}
