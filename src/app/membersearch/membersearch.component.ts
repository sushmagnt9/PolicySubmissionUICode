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
  users:MemberRegister[] = [];
  user : MemberRegister = {
    UserId:0,
    UserName:'',
    FirstName:'',
    LastName:'',
    DOB:new Date,
    Address:'',
    State:'',
    Email:''
  }
  constructor(private memberService : memberService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.memberService.SearchMember(this.user)
    .subscribe(
      response => {
         this.users = response;
      }
    );
}
}