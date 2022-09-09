import { Component, OnInit } from '@angular/core';
import { MemberRegister } from '../models/memberpage';
import { memberService } from '../service/member.service';

@Component({
  selector: 'app-membersearch',
  templateUrl: './membersearch.component.html',
  styleUrls: ['./membersearch.component.css']
})
export class MembersearchComponent implements OnInit {
  title = "Search Members";
 //users:MemberRegister[] ;
 users: any = {};
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
  constructor(private memberService : memberService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.memberService.SearchMember(this.user)
    .subscribe(
      response => {
        // this.users=Object.values(response);
        this.users = response;
         console.log(this.users);
      }
    );
}
}